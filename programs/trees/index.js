const Node = require("./Node");
const Queue = require("./Queue");

class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }

  printInOrder(node) {
    if (node !== null) {
      this.printInOrder(node.left);
      console.log(node.value);
      this.printInOrder(node.right);
    }
  }

  printPreOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this.printPreOrder(node.left);
      this.printPreOrder(node.right);
    }
  }

  printPostOrder(node) {
    if (node !== null) {
      this.printPostOrder(node.left);
      this.printPostOrder(node.right);
      console.log(node.value);
    }
  }

  //breadth first search
  printLevelOrder(node) {
    const queueObject = new Queue();
    queueObject.add(node);
    while (!queueObject.isEmpty()) {
      let deletedNode = queueObject.delete();
      console.log(deletedNode.value.value);
      if (deletedNode.value.left !== null) {
        queueObject.add(deletedNode.value.left);
      }
      if (deletedNode.value.right !== null) {
        queueObject.add(deletedNode.value.right);
      }
    }
  }

  //height of binary tree
  getHeight(node) {
    if (node === null) return 0;
    let lDepth = this.getHeight(node.left);
    let rDepth = this.getHeight(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }

  //size of binary tree
  getSize(node) {
    if (node === null) return 0;
    return 1 + this.getSize(node.left) + this.getSize(node.right);
  }

  maxInTree(node) {
    if (node === null) return 0;
    const left = this.maxInTree(node.left);
    const right = this.maxInTree(node.right);
    const maximum = left > right ? left : right;
    const maximumWithNode = node.value > maximum ? node.value : maximum;
    return maximumWithNode;
  }

  printNodesAtKDistance(node, k) {
    if (node === null) return;
    if (k === 0) {
      console.log(node.value);
    } else {
      this.printNodesAtKDistance(node.left, k - 1);
      this.printNodesAtKDistance(node.right, k - 1);
    }
  }

  maximumWidth(node) {
    const queueObject = new Queue();
    queueObject.add(node);
    let max = queueObject.getSize();
    while (!queueObject.isEmpty()) {
      let tempSize = queueObject.getSize();
      for (let i = 0; i < tempSize; i++) {
        let deletedNode = queueObject.delete();
        if (deletedNode.value.left !== null) {
          queueObject.add(deletedNode.value.left);
        }
        if (deletedNode.value.right !== null) {
          queueObject.add(deletedNode.value.right);
        }
      }
      let size = queueObject.getSize();
      if (max < size) {
        max = size;
      }
    }
    return max;
  }
}

let root = new Node(10);

let tree = new BinaryTree(root);

root.left = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.left.right.left = new Node(70);
root.left.right.right = new Node(80);

root.right = new Node(30);
root.right.right = new Node(60);

console.log("in order");
tree.printInOrder(root);

console.log("pre order");
tree.printPreOrder(root);

console.log("post order");
tree.printPostOrder(root);

console.log("Level order or breadth first");
console.log(tree.printLevelOrder(root));

console.log("Height of the binary tree");
const h = tree.getHeight(root);
console.log(h);

console.log("Size of the binary tree");
const s = tree.getSize(root);
console.log(s);

console.log("Maximum in binary tree");
const maximum = tree.maxInTree(root);
console.log(maximum);

console.log("print at k distance");
tree.printNodesAtKDistance(root, 2);

console.log("maximum width of the binary tree");
let m = tree.maximumWidth(root);
console.log(m);
