class LinkedNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  add(value) {
    let node = new LinkedNode(value);

    //if queue is empty
    if (this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    //add new node at rear
  }

  delete() {
    if (this.front === null) {
      return;
    }
    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    if (this.front === null) {
      this.rear = null;
    }
    return temp;
  }

  print() {
    let node = this.front;
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }

  isEmpty() {
    if (this.front === null) return true;
    else return false;
  }
}

let q = new Queue();

q.add(10);
q.add(20);
q.add(30);
q.add(40);
q.add(50);

console.log("Printing the queue");

q.print();

console.log("deleting");
console.log(q.delete());
console.log("deleted queue");
q.print();

console.log("is empty");
console.log(q.delete());
console.log(q.delete());
console.log(q.delete());
console.log(q.delete());
console.log(q.isEmpty());

module.exports = Queue;
