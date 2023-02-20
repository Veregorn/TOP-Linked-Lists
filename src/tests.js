import {LinkedList} from './linked-list.js';

// Let's do  some test with implemented methods
let myLinkedList = LinkedList();

// Now that our listed link is empty, let's print it
console.log(myLinkedList.toString()); // OK

// The size of this list must be 0
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Let's now try to add an element to the list
myLinkedList.append(7);

// now let's print the list again
console.log(myLinkedList.toString()); // OK

// The size of this list must be 1
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Let's add another element
myLinkedList.append(3);

// now let's print the list again
console.log(myLinkedList.toString()); // OK

// The size of this list must be 2
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Let's add another element
myLinkedList.append(1);

// now let's print the list again
console.log(myLinkedList.toString()); // OK

// The size of this list must be 3
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Let's add one node but to be the head in the list
myLinkedList.prepend(2);

// now let's print the list again
console.log(myLinkedList.toString()); // OK

// The size of this list must be 4
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Let's print the value at position -1
myLinkedList.at(-1); // OK

// Let's print the value at position 6
myLinkedList.at(6); // OK

// Let's print the value at position 2
console.log(`The value at position 2 is: ${myLinkedList.at(2).getValue()}`); // OK

// Let's print the value at position 4
console.log(`The value at position 4 is: ${myLinkedList.at(4).getValue()}`); // OK

// Let's pop the last element in the linked list
myLinkedList.pop();
console.log(myLinkedList.toString()); // OK
//Let's do it again
myLinkedList.pop();
console.log(myLinkedList.toString()); // OK
// And again
myLinkedList.pop();
console.log(myLinkedList.toString()); // OK
// And again
myLinkedList.pop();
console.log(myLinkedList.toString()); // OK

// Let's populate the list again with some values
myLinkedList.append(6);
myLinkedList.append(8);
myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.append(4);

// Let's print it
console.log(myLinkedList.toString()); // OK
console.log(`This linked list has a size of: ${myLinkedList.size()}`); // OK

// Is number 5 in the list?
console.log(`Is number 5 in the list? ${myLinkedList.contains(5)}`); // OK
// Is number 1 in the list?
console.log(`Is number 1 in the list? ${myLinkedList.contains(1)}`); // OK

// Which is the index of 2 in the list?
console.log(`The index of 2 in the list is:  ${myLinkedList.find(2)}`); // OK
// Which is the index of 1 in the list?
console.log(`The index of 1 in the list is:  ${myLinkedList.find(1)}`); // OK

// Try to insert at index 0
myLinkedList.insertAt(1,0);
// Let's insert value 1 at index 1
myLinkedList.insertAt(1,1);
console.log(myLinkedList.toString()); // OK
// Let's insert value 9 at index size() + 1 (append)
myLinkedList.insertAt(9,7);
console.log(myLinkedList.toString()); // OK
// Now let's insert at index 3
myLinkedList.insertAt(3,3);
console.log(myLinkedList.toString()); // OK

// Try to remove at index 9
myLinkedList.removeAt(9);
// Remove at index == size list
myLinkedList.removeAt(8);
console.log(myLinkedList.toString()); // OK
// Remove at index 3
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK
// Again
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK
// Again
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK
// Again
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK
// Again
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK
// Again
myLinkedList.removeAt(3);
console.log(myLinkedList.toString()); // OK