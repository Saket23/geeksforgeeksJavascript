class Queue {
  constructor() {
    this.queueList = [];
  }

  push(val) {
    this.queueList.push(val);
    for (let i = 0; i < this.queueList.length; i++) {
      console.log(this.queueList[i]);
    }
  }

  pop() {
    const a = this.queueList.shift();
    for (let i = 0; i < this.queueList.length; i++) {
      console.log(this.queueList[i]);
    }
    return a;
  }
}

const list = new Queue();

console.log("adding");
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

console.log("popping");
const b = list.pop();
console.log("popped");
console.log(b);
