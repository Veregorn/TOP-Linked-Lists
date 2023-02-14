// Let's create a factory for a node to use it in the linked list
const Node = () => {
    // Properties
    let _value = null;
    let _nextNode = null;

    // Methods
    
    // Return value field of a node
    const getValue = () => _value;

    // Return a link to the next node in the linked list
    const getNextNode = () => _nextNode;

    // Set value to input value
    const setValue = (value) => _value = value;
    
    // Sel nextNode to input node
    const setNextNode = (node) => _nextNode =  node;

    return {
        getValue,
        getNextNode,
        setValue,
        setNextNode
    }
};