import {Node} from './node.js';

// Let's create a factory for a linked list containing nodes
export const LinkedList = () => {
    // Properties
    let _head = Node();
    
    // Methods

    // Returns the first node in the list
    const head = () => _head;

    // Returns the total number of nodes in the list
    const size = () => {
        let length = 0;
        let currentNode = head();
        while (currentNode.getNextNode() != null) {
            currentNode = currentNode.getNextNode();
            length++;
        }
        if (head().getValue() != null) {
            length++;
        }
        return length;
    }

    // Returns the last node in the list
    const tail = () => {
        let currentNode = head();
        if (size() > 1) {
            for (let i = 2; i <= size(); i++) {
                currentNode = currentNode.getNextNode();
            }
        }
        return currentNode;
    }

    // Adds a new node containing value to the end of the list
    const append = (value) => {
        if (size() == 0) {
            _head.setValue(value);
        } else {
            let node = Node();
            node.setValue(value);
            tail().setNextNode(node);
        }
    }

    // Adds a new node containing value to the start of the list
    const prepend = (value) => {
        if (size() == 0) {
            _head.setValue(value);
        } else {
            let node = Node();
            node.setValue(value);
            node.setNextNode(_head);
            _head = node;
        }
    }

    // Returns the node at the given index
    const at = (index) => {
        if (index <= 0) {
            console.log("ERROR: Index must be greater than 0");
            return null;
        } else if (index > size()) {
            console.log(`ERROR: Index out of range. List size: ${size()}`);
            return null;
        } else if (index == 1) {
            return head();
        } else {
            let nodeAux = head().getNextNode();
            index--;
            while (index > 1) {
                nodeAux = nodeAux.getNextNode();
                index--;
            }
            return nodeAux;
        }
    }

    // Removes the last element from the list
    const pop = () => {
        if (size() == 0) {
            return;
        } else if (size()  == 1) {
            head().setValue(null);
        } else {
            at(size() - 1).setNextNode(null);
        }
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    const contains = (value) => {
        for (let i = 1; i <= size(); i++) {
            if (at(i).getValue() === value) {
                return true;
            }
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found.
    const find = (value) => {
        for (let i = 1; i <= size(); i++) {
            if (at(i).getValue() === value) {
                return i;
            }
        }
        return null;
    }

    // Represents your LinkedList objects as strings, so you can print them out 
    // and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString = () => {
        return head().toString();
    }

    // Inserts a new node with the provided value at the given index
    const insertAt = (value, index) => {
        if (index < 1 || index > size() + 1) {
            console.log(`Index out of range. Try a valid one between 1 and ${size() + 1}`);
        } else if (index == 1) {
            prepend(value);
        // In this case let's append the element
        } else if (index == size() + 1) {
            append(value);
        } else {
            let node = Node();
            node.setValue(value);
            node.setNextNode(at(index));
            at(index - 1).setNextNode(node);
        }
    }

    // Removes the node at the given index
    const removeAt = (index) => {
        if (index < 1 || index > size()) {
            console.log(`Index out of range. Try a valid one between 1 and ${size()}`);
        } else if (size() == 1) {
            head().setValue(null);
        } else if (index == size()) {
            pop();
        } else {
            at(index - 1).setNextNode(at(index + 1));
        }
    }

    return {
        head,
        size,
        tail,
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
};