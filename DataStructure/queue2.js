// 1. array
class Queue {
    constructor () {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        if (this.items.length === 0){
            return "Queue is Empty";
        }else{
            return "Queue is not Empty";
        }
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());

// 2. linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue2 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Queue is Empty";
        }
        const removedNode = this.head;
        this.head= removedNode.next;

        if (this.size === 1){
            this.tail = null;
        }

        this.size--;

        return removedNode.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()){
            return "Queue is Empty";
        }
        return this.head.value;
    }
}
