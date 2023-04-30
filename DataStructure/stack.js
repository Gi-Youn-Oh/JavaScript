// 1. array
class Stack {
  constructor() {
    this.itmes = [];
  }

  push(element) {
    this.itmes.push(element);
  }

  pop(element) {
    if (this.itmes.length == 0) {
      return "Stack is Empty";
    }
    return this.itmes.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    if (this.items.length == 0) {
      return "Stack is Empty";
    } else {
      return "Stack is not Empty";
    }
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
console.log(testStack.pop());
console.log(testStack.pop());
console.log(testStack.pop());
console.log(testStack.pop());

// 2. linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack2 {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    const removed = this.head;
    this.head = this.head.next;
    this.size--;
    return removed.value;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.head.value;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}
