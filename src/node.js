// Let's create a factory for a node to use it in the linked list
export const Node = () => {
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

    // Returns a String with the node to print it
    const toString = () => {
        return `( ${getValue()} ) -> ${getNextNode()}`;
    }

    return {
        getValue,
        getNextNode,
        setValue,
        setNextNode,
        toString
    }
};