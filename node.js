// Let's create a factory for a node to use it in the linked list
const Node = () => {
    // Properties
    let _value = null;
    let _nextNode = null;

    // Methods
    const value = () => _value;

    const nextNode = () => _nextNode;
};