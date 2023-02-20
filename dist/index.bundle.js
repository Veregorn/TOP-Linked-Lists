"use strict";
(self["webpackChunktop_linked_lists"] = self["webpackChunktop_linked_lists"] || []).push([["index"],{

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");


// Let's create a factory for a linked list containing nodes
const LinkedList = () => {
  // Properties
  let _head = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__.Node)();

  // Methods

  // Returns the first node in the list
  const head = () => _head;

  // Returns the total number of nodes in the list
  const size = () => {
    let length = 0;
    let currentNode = undefined.head();
    while (currentNode.getNextNode() != null) {
      currentNode = currentNode.getNextNode();
      length++;
    }
    if (length == 0 && head().getValue() != null) {
      length++;
    }
    return length;
  };

  // Returns the last node in the list
  const tail = () => {
    let currentNode = undefined.head();
    if (undefined.size() > 1) {
      for (let i = 2; i <= undefined.size(); i++) {
        currentNode = currentNode.getNextNode();
      }
    }
    return currentNode;
  };

  // Adds a new node containing value to the end of the list
  const append = value => {
    if (undefined.size() == 0) {
      _head.setValue(value);
    } else {
      let node = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__.Node)();
      node.setValue(value);
      undefined.tail().setNextNode(node);
    }
  };

  // Represents your LinkedList objects as strings, so you can print them out 
  // and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let str = "";
    let currentNode = undefined.head();
    for (let i = 0; i <= undefined.size(); i++) {
      str += currentNode.toString();
    }
    return str;
  };
  return {
    head,
    size,
    tail,
    append,
    toString
  };
};

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
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
  const setValue = value => _value = value;

  // Sel nextNode to input node
  const setNextNode = node => _nextNode = node;

  // Returns a String with the node to print it
  const toString = () => {
    return `( ${undefined.getValue()} ) -> ${undefined.getNextNode()}`;
  };
  return {
    getValue,
    getNextNode,
    setValue,
    setNextNode,
    toString
  };
};

/***/ }),

/***/ "./src/tests.js":
/*!**********************!*\
  !*** ./src/tests.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linked_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list.js */ "./src/linked-list.js");


// Let's do  some test with implemented methods
let myLinkedList = (0,_linked_list_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList)();

// Now that our listed link is empty, let's print it
console.log(myLinkedList.toString());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tests.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1IsUUFBUSxFQUFHLFNBQVEsU0FBSSxDQUFDRCxXQUFXLEVBQUcsRUFBQztFQUM1RCxDQUFDO0VBRUQsT0FBTztJQUNIQyxRQUFRO0lBQ1JELFdBQVc7SUFDWE0sUUFBUTtJQUNSRSxXQUFXO0lBQ1hDO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7OztBQ2hDMkM7O0FBRTVDO0FBQ0EsSUFBSUksWUFBWSxHQUFHbkIsMkRBQVUsRUFBRTs7QUFFL0I7QUFDQW9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZLENBQUNKLFFBQVEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy8uL3NyYy9saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy8uL3NyYy90ZXN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05vZGV9IGZyb20gJy4vbm9kZS5qcyc7XG5cbi8vIExldCdzIGNyZWF0ZSBhIGZhY3RvcnkgZm9yIGEgbGlua2VkIGxpc3QgY29udGFpbmluZyBub2Rlc1xuZXhwb3J0IGNvbnN0IExpbmtlZExpc3QgPSAoKSA9PiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGxldCBfaGVhZCA9IE5vZGUoKTtcbiAgICBcbiAgICAvLyBNZXRob2RzXG5cbiAgICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgY29uc3QgaGVhZCA9ICgpID0+IF9oZWFkO1xuXG4gICAgLy8gUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0XG4gICAgY29uc3Qgc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZCgpO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUuZ2V0TmV4dE5vZGUoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGxlbmd0aCA9PSAwKSAmJiAoaGVhZCgpLmdldFZhbHVlKCkgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgY29uc3QgdGFpbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkKCk7XG4gICAgICAgIGlmICh0aGlzLnNpemUoKSA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMuc2l6ZSgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmdldE5leHROb2RlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH1cblxuICAgIC8vIEFkZHMgYSBuZXcgbm9kZSBjb250YWluaW5nIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSgpID09IDApIHtcbiAgICAgICAgICAgIF9oZWFkLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gTm9kZSgpO1xuICAgICAgICAgICAgbm9kZS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnRhaWwoKS5zZXROZXh0Tm9kZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlcHJlc2VudHMgeW91ciBMaW5rZWRMaXN0IG9iamVjdHMgYXMgc3RyaW5ncywgc28geW91IGNhbiBwcmludCB0aGVtIG91dCBcbiAgICAvLyBhbmQgcHJldmlldyB0aGVtIGluIHRoZSBjb25zb2xlLlxuICAgIC8vIFRoZSBmb3JtYXQgc2hvdWxkIGJlOiAoIHZhbHVlICkgLT4gKCB2YWx1ZSApIC0+ICggdmFsdWUgKSAtPiBudWxsXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5zaXplKCk7IGkrKykge1xuICAgICAgICAgICAgc3RyICs9IGN1cnJlbnROb2RlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkLFxuICAgICAgICBzaXplLFxuICAgICAgICB0YWlsLFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIHRvU3RyaW5nXG4gICAgfVxufTsiLCIvLyBMZXQncyBjcmVhdGUgYSBmYWN0b3J5IGZvciBhIG5vZGUgdG8gdXNlIGl0IGluIHRoZSBsaW5rZWQgbGlzdFxuZXhwb3J0IGNvbnN0IE5vZGUgPSAoKSA9PiB7XG4gICAgLy8gUHJvcGVydGllc1xuICAgIGxldCBfdmFsdWUgPSBudWxsO1xuICAgIGxldCBfbmV4dE5vZGUgPSBudWxsO1xuXG4gICAgLy8gTWV0aG9kc1xuICAgIFxuICAgIC8vIFJldHVybiB2YWx1ZSBmaWVsZCBvZiBhIG5vZGVcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+IF92YWx1ZTtcblxuICAgIC8vIFJldHVybiBhIGxpbmsgdG8gdGhlIG5leHQgbm9kZSBpbiB0aGUgbGlua2VkIGxpc3RcbiAgICBjb25zdCBnZXROZXh0Tm9kZSA9ICgpID0+IF9uZXh0Tm9kZTtcblxuICAgIC8vIFNldCB2YWx1ZSB0byBpbnB1dCB2YWx1ZVxuICAgIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiBfdmFsdWUgPSB2YWx1ZTtcbiAgICBcbiAgICAvLyBTZWwgbmV4dE5vZGUgdG8gaW5wdXQgbm9kZVxuICAgIGNvbnN0IHNldE5leHROb2RlID0gKG5vZGUpID0+IF9uZXh0Tm9kZSA9ICBub2RlO1xuXG4gICAgLy8gUmV0dXJucyBhIFN0cmluZyB3aXRoIHRoZSBub2RlIHRvIHByaW50IGl0XG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgKCAke3RoaXMuZ2V0VmFsdWUoKX0gKSAtPiAke3RoaXMuZ2V0TmV4dE5vZGUoKX1gO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFZhbHVlLFxuICAgICAgICBnZXROZXh0Tm9kZSxcbiAgICAgICAgc2V0VmFsdWUsXG4gICAgICAgIHNldE5leHROb2RlLFxuICAgICAgICB0b1N0cmluZ1xuICAgIH1cbn07IiwiaW1wb3J0IHtMaW5rZWRMaXN0fSBmcm9tICcuL2xpbmtlZC1saXN0LmpzJztcblxuLy8gTGV0J3MgZG8gIHNvbWUgdGVzdCB3aXRoIGltcGxlbWVudGVkIG1ldGhvZHNcbmxldCBteUxpbmtlZExpc3QgPSBMaW5rZWRMaXN0KCk7XG5cbi8vIE5vdyB0aGF0IG91ciBsaXN0ZWQgbGluayBpcyBlbXB0eSwgbGV0J3MgcHJpbnQgaXRcbmNvbnNvbGUubG9nKG15TGlua2VkTGlzdC50b1N0cmluZygpKTsiXSwibmFtZXMiOlsiTm9kZSIsIkxpbmtlZExpc3QiLCJfaGVhZCIsImhlYWQiLCJzaXplIiwibGVuZ3RoIiwiY3VycmVudE5vZGUiLCJnZXROZXh0Tm9kZSIsImdldFZhbHVlIiwidGFpbCIsImkiLCJhcHBlbmQiLCJ2YWx1ZSIsInNldFZhbHVlIiwibm9kZSIsInNldE5leHROb2RlIiwidG9TdHJpbmciLCJzdHIiLCJfdmFsdWUiLCJfbmV4dE5vZGUiLCJteUxpbmtlZExpc3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==