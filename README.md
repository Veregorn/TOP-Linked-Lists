# TOP-Linked-Lists
The goal is to create a linked list data structure and add to it some methods for basic operations.

We will need two classes or factories:

- LinkedList class / factory, which will represent the full list.
- Node class / factory, containing a value function and a link to the nextNode, set both as null by default.

And we are going to build the following functions in our linked list class:

- append(value): Adds a new node containing value to the end of the list
- prepend(value): Adds a new node containing value to the start of the list
- size: Returns the total number of nodes in the list
- head: Returns the first node in the list
- tail: Returns the last node in the list
- at(index): Returns the node at the given index
- pop: Removes the last element from the list
- contains(value): Returns true if the passed in value is in the list and otherwise returns false.
- find(value): Returns the index of the node containing value, or null if not found.
- toString: Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
- insertAt(value, index): Inserts a new node with the provided value at the given index.
- removeAt(index): Removes the node at the given index.

NOTE: When we insert or remove a node, its needed to consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.