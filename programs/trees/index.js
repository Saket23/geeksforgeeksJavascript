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
  height(node) {
    if (node === null) return 0;
    let lDepth = this.height(node.left);
    let rDepth = this.height(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
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

console.log("Height of the binary tree");
const h = tree.height(root);
console.log(h);

console.log("Level order or breadth first");
console.log(tree.printLevelOrder(root));
