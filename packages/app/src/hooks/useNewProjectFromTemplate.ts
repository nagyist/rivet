import { useSetAtom } from 'jotai';
import { loadedProjectState, projectState } from '../state/savedGraphs.js';
import {
  type GraphId,
  type NodeGraph,
  deserializeProject,
  emptyNodeGraph,
  type BuiltInNodes,
  type ProjectId,
} from '@ironclad/rivet-core';
import { graphState } from '../state/graph.js';
import { trivetState } from '../state/trivet';
import { orderBy } from 'lodash-es';
import { duplicateGraph } from '../utils/duplicateGraph';
import { produce } from 'immer';
import { nanoid } from 'nanoid';

export function useNewProjectFromTemplate() {
  const setProject = useSetAtom(projectState);
  const setLoadedProject = useSetAtom(loadedProjectState);
  const setGraphData = useSetAtom(graphState);
  const setTrivetData = useSetAtom(trivetState);

  return (template: unknown) => {
    let [project] = deserializeProject(template);

    project = produce(project, (draft) => {
      const newGraphs: NodeGraph[] = [];
      const oldNewGraphIdMapping: Record<GraphId, GraphId> = {};

      // Duplicate each graph to get brand new IDs for all nodes and connections
      for (const graph of Object.values(draft.graphs)) {
        const duplicated = duplicateGraph(graph);
        newGraphs.push(duplicated);
        oldNewGraphIdMapping[graph.metadata!.id!] = duplicated.metadata!.id!;
      }

      // Subgraph node and Loop Until node are the only nodes that maintain a reference to another graph,
      // so we need to update the graphId for them
      for (const graph of newGraphs) {
        for (const node of graph.nodes) {
          const builtInNode = node as BuiltInNodes;
          if (builtInNode.type === 'subGraph') {
            builtInNode.data.graphId = oldNewGraphIdMapping[builtInNode.data.graphId]!;
          }
          if (builtInNode.type === 'loopUntil') {
            builtInNode.data.targetGraph = builtInNode.data.targetGraph
              ? oldNewGraphIdMapping[builtInNode.data.targetGraph]
              : undefined;
          }
        }
      }

      draft.graphs = newGraphs.reduce(
        (acc, graph) => {
          acc[graph.metadata!.id!] = graph;
          return acc;
        },
        {} as Record<GraphId, NodeGraph>,
      );

      // Also need to update the main graph if it's set
      if (draft.metadata.mainGraphId) {
        draft.metadata.mainGraphId = oldNewGraphIdMapping[draft.metadata.mainGraphId]!;
      }
    });

    setLoadedProject({ loaded: false, path: '' });
    setProject({
      ...project,
      metadata: {
        ...project.metadata,
        id: nanoid() as ProjectId,
      },
    });

    const firstGraph = orderBy(Object.values(project.graphs), (g) => g.metadata!.name!)[0];

    if (firstGraph) {
      setGraphData(firstGraph);
    } else {
      setGraphData(emptyNodeGraph());
    }

    setTrivetData({
      runningTests: false,
      testSuites: [],
    });
  };
}
