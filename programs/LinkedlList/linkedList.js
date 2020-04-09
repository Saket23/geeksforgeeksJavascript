const LinkedNode = require("./linkedNode");

class LinkedList {
  constructor(value) {
    this.head = new LinkedNode(value);
  }
  add(value) {
    const newNode = new LinkedNode(value);
    if (this.head.next === null) {
      this.head.next = newNode;
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  delete(value) {
    let node = this.head;
    if (value === this.head.value) {
      this.head = this.head.next;
    } else {
      while (node.next) {
        if (node.next.value === value) {
          node.next = node.next.next;
        } else {
          node = node.next;
        }
      }
    }
  }

  reverse() {
    let prevNode = this.head;
    let tempNode = this.head.next;
    let currentNode = this.head.next;
    prevNode.next = null;
    while (tempNode) {
      tempNode = tempNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = tempNode;
    }
    this.head = prevNode;
  }

  print() {
    let node = this.head;
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
}

const node1 = new LinkedList(10);

node1.add(20);
node1.add(30);
node1.add(40);
node1.add(50);

node1.print();

console.log("deleting head");
node1.delete(10);

node1.print();

console.log("deleting middle");
node1.delete(30);
node1.print();

console.log("deleting tail");
node1.delete(50);
node1.print();

node1.add(60);
node1.add(70);
node1.add(80);
node1.add(90);
console.log("adding printing again");
node1.print();

node1.reverse();
console.log("printing reverse");
node1.print();
