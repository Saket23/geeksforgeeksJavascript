class Stack {
  constructor() {
    this.stackList = [];
    this.top = -1;
  }

  push(val) {
    this.stackList.push(val);
    for (let i = 0; i < this.stackList.length; i++) {
      console.log(this.stackList[i]);
    }
  }

  pop() {
    const a = this.stackList.pop();
    for (let i = 0; i < this.stackList.length; i++) {
      console.log(this.stackList[i]);
    }
    return a;
  }
}

const list = new Stack();

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
