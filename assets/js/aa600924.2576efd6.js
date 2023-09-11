"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4368],{6593:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(1644);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},A="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),A=h(r),g=a,u=A["".concat(l,".").concat(g)]||A[g]||c[g]||o;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[A]="string"==typeof e?e:a,i[1]=p;for(var h=2;h<o;h++)i[h]=r[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var n=r(373),a=(r(1644),r(6593));const o={sidebar_label:"01 - Simple Graph"},i="Simple Graph",p={unversionedId:"tutorial/simple-graph",id:"tutorial/simple-graph",title:"Simple Graph",description:"In the sidebar you should see the graphs tab with a list of numbered folders with graphs. These are the graphs that are included in the tutorial project.",source:"@site/docs/tutorial/01-simple-graph.md",sourceDirName:"tutorial",slug:"/tutorial/simple-graph",permalink:"/docs/tutorial/simple-graph",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/tutorial/01-simple-graph.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"01 - Simple Graph"},sidebar:"tutorial",previous:{title:"00 - Installing & Overview",permalink:"/docs/tutorial/installing-getting-started"},next:{title:"02 - Interpolation & More Node Types",permalink:"/docs/tutorial/interpolation-more-node-types"}},l={},h=[{value:"Experiments",id:"experiments",level:2}],s={toc:h},A="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(A,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-graph"},"Simple Graph"),(0,a.kt)("p",null,"In the sidebar you should see the graphs tab with a list of numbered folders with graphs. These are the graphs that are included in the tutorial project."),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"1. Simple Graph")," folder you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple Graph")," graph. Click on the graph to open it."),(0,a.kt)("p",null,"You should see the following graph:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple Graph",src:r(6731).Z,width:"1054",height:"316"})),(0,a.kt)("p",null,"This graph has 2 nodes. A ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/text"},"text")," node and a ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/chat"},"chat")," node."),(0,a.kt)("p",null,"Click the green run button in the top right corner of the graph to run this graph."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple Graph",src:r(3610).Z,width:"75",height:"31"})),(0,a.kt)("p",null,"You should see something similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple Graph",src:r(692).Z,width:"1248",height:"460"})),(0,a.kt)("p",null,"When you ran the graph, the text node sent its output to the prompt of the chat node. The chat node then sent a post request to OpenAI's ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},"create")," endpoint and received a response. The response was then sent to the output of the graph."),(0,a.kt)("p",null,"Let's experiment with the nodes in this graph. To change the parameters of a node, click on the edit gear in the top right on the node."),(0,a.kt)("h2",{id:"experiments"},"Experiments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Change the text node to ask a new question like "What\'s the difference between a NDA and a MNDA". Run the graph again and observe the chat node respond with new text.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Change the chat nodes max tokens to 256. Run the graph again and observe the chat node respond with less text.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Change the chat nodes temperature to 1. Run the graph again and observe the chat node respond with more variable text."))))}c.isMDXComponent=!0},3610:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAfCAYAAACvUTALAAABX2lDQ1BJQ0MgUHJvZmlsZQAAKJFjYGDiSCwoyGFhYGDIzSspCnJ3UoiIjFJgf87AxiDKIM4gyMCYmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisppZvuU3OmsGzupPr/bnTV2KqRwFcKanFyUD6DxAbJBcUlTAwMOoA2QHlJQUgdg2QLVIEdBSQPQHEToewl4DYSRD2DrCakCBnIPsMkC2QnJGYAmTfAbJ1kpDE05HYuTmlyVA3gFzPk5oXGgwyB4hlGFwZfBmMGNwYAhgcGZyALHMGJxzqTcDqnRnyGQoYKhmKGDIZ0hkyGEoYFIA6C4AwhyEVyPZkyGNIZtBj0AGyjRgMgNgYFM7o4YcQm6LCwODFxcDA1IMQs33CwLBCCuhEDYSYyjkGBt7bDAx7KgsSixLhocr4jaU4zdgIwuYHRi97xP//n/oYGDiPMzD8fvf//+/Q////rmJgYAaG3QFOAOfXYIL+qHrGAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAABLoAMABAAAAAEAAAAfAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdKv9R1MAAAHUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjMxPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjc1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CjJXVDQAAAKuSURBVGgFY1RTU/vPMAoIhoCOjg4DC0yVQZsijDlKo4XAhar7DP///2dgQhMf5eIJgdHAwhM46FKjgYUeInj4o4GFJ3CQpRgZGUfLLOQAwcceLeDxhQ6a3GjKQgsQfNzRlIUvdLDIjRbwWAIFl9BoYOEKGSzi8O4OFjmShHTEDBgqrJsZvvz6zMDCxMLw/vs7hvkXpzFce32JJHPIVawpostw/c1lcrUTpY+qKevyq/MMGVujGFI3hzOsvraIodiilgFUi9ADuCn5MIRrx9PUKqoGFsyl/xn+M5x6dgxI/mcQYBdikOGTYyiyqIFJM1jJ2jMEa0aB+fH6GUB2NEOr40SGHteZYDm4QhIYE0+1M8jxKdI0wGgSWKBsaCfnzPDt91eG9z/eMjAzsjDwsvHDvc7OzMHAxcoN5vOw8jBI88oy1OwvYOg70cwQpZMEV0cqo/t4A0OQRiSDhYwtqVqJUk+1Mgtkm46oAcMUz0UMHCwcDF9/fWFoPVxFlCNOPTsKToXPPj9h+PvvL4MAhyDDhx/vidKLrKjUsoFh3Y3lDCeeHEYWphqbqinryusLDDnb4xhKd2cwcLJyMvz48x3sUFB2ZGJEWIXMBin48/c33EN//v1hIKcXlm9WyfDo032GlVcXws2iJoNmLfj3P94x7H+wiyFEKwbs3vff3zLICygysDKxgvkaIjrU9AfYrF33ttAsoEAW0LQFv+nmagZzaRsGSR5phs+/PjEcfrQPnEWbHHqBZRgz1QOL1s0GkIMZYWPw9BhWZmdmZwBls7///1I9sGhpIGhYWVtbGzEGT0vLYGb//PsTxhySNKLUHZLOp6+jRwOLyPCmWW1IpP1DShlNa8MhFRJEOnY0GxIZUKPZkMiAAikbzYYkBBZI6Wg2JCHA4KMOoFbqKMAfAgB93Kzjs2gzQAAAAABJRU5ErkJggg=="},692:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/simple-graph-after-run-56d546b6d5a26b1a8451e61d8e9fc47e.png"},6731:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/simple-graph-start-1ef32a96539252eece348e169dc848c5.png"}}]);