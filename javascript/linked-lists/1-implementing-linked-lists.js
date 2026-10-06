class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // traverse to the node right before the given index, so insert/remove
  // can rewire its `next` pointer
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    if (index <= 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    if (unwantedNode === this.tail) {
      this.tail = leader;
    }
    this.length--;
    return this;
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values);
  }
}

// Test code
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.print(); // [1, 10, 99, 5, 16]

myLinkedList.remove(2);
myLinkedList.print(); // [1, 10, 5, 16]

// Unlike arrays, a linked list only needs to update a couple of pointers to
// insert or remove a node, instead of shifting every element after it.
// The tradeoff is lookup: there's no index-based access, so finding a node
// by position means walking the list from the head, which is O(n).
