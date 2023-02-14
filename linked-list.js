import './node';

// Let's create a factory for a linked list containing nodes
const LinkedList = () => {
    // Properties
    let _head = Node();
    
    // Methods

    // Returns the first node in the list
    const head = () => _head;

    // Returns the total number of nodes in the list
    const size = () => {
        let length = 0;
        let currentNode = this.head();
        while (currentNode.getNextNode() != null) {
            currentNode = currentNode.getNextNode();
            length++;
        }
        if ((length == 0) && (head().getValue() != null)) {
            length++;
        }
        return length;
    }

    // Returns the last node in the list
    const tail = () => {
        let currentNode = this.head();
        if (this.size() > 1) {
            for (let i = 2; i <= this.size(); i++) {
                currentNode = currentNode.getNextNode();
            }
        }
        return currentNode;
    }

    // Adds a new node containing value to the end of the list
    const append = (value) => {
        if (this.size() == 0) {
            _head.setValue(value);
        } else {
            let node = Node();
            node.setValue(value);
            this.tail().setNextNode(node);
        }
    }

    return {
        head,
        size,
        tail,
        append
    }
};