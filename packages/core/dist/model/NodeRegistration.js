export class NodeRegistration {
    NodesType = undefined;
    NodeTypesType = undefined;
    #impls = {};
    #displayNames = {};
    register(definition) {
        const newRegistration = this;
        const typeStr = definition.impl.create().type;
        newRegistration.#impls[typeStr] = definition.impl;
        newRegistration.#displayNames[typeStr] = definition.displayName;
        return newRegistration;
    }
    create(type) {
        const implClass = this.#impls[type];
        if (!implClass) {
            throw new Error(`Unknown node type: ${type}`);
        }
        return implClass.create();
    }
    createImpl(node) {
        const type = node.type;
        const ImplClass = this.#impls[type];
        if (!ImplClass) {
            throw new Error(`Unknown node type: ${type}`);
        }
        const impl = new ImplClass(node);
        if (!impl) {
            throw new Error(`Unknown node type: ${type}`);
        }
        return impl;
    }
    getDisplayName(type) {
        return this.#displayNames[type];
    }
    isRegistered(type) {
        return this.#impls[type] !== undefined;
    }
}