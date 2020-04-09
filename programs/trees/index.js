class Node {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.value = value;
    this.right = right;
  }
}

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
