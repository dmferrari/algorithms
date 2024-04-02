"use strict";

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  traversal() {
    let array = [];
    this.inOrderTraversal(this.root, array);

    return array;
  }

  inOrderTraversal(node, array) {
    if (node === null) {
      return;
    }

    this.inOrderTraversal(node.left, array);
    array.push(node.value);
    this.inOrderTraversal(node.right, array);
  }
}

let bt = new BinaryTree();
for (let x = 0; x < 1000; x++) {
  bt.insert(Math.floor(Math.random() * 1000));
}

console.log(bt.traversal());
