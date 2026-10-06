class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // duplicates and ties go to the right, mirroring < on the left
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode;
      }
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
    }
    return null;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    }
    if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    }

    // found the node to remove
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    // two children: replace this node's value with its in-order successor
    // (the smallest value in the right subtree), then remove that successor
    let successor = node.right;
    while (successor.left !== null) {
      successor = successor.left;
    }
    node.value = successor.value;
    node.right = this._removeNode(node.right, successor.value);
    return node;
  }
}

// Test code
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

function traverse(node) {
  if (node === null) {
    return null;
  }
  const tree = { value: node.value };
  tree.left = traverse(node.left);
  tree.right = traverse(node.right);
  return tree;
}

console.log(JSON.stringify(traverse(tree.root)));
//      9
//   4     20
// 1  6  15  170

console.log(tree.lookup(15).value); // 15
console.log(tree.lookup(999)); // null

tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
