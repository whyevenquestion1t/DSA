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
        if (this.root == null) {
            this.root = new Node(value);
        } else {
            if (this.root.left == null) {
                // let's create a rule where the default assignment goes to the left:

                //  1. because there isn't a right value
                //  2. the duplicate values should be assigned as new nodes to the left of the parent node
                //  3. if the left node is not null, then we need to check the value against the left node 
                //  and make a decision whether we want to reassign the left value or add the right node 

                // I need a way to travel through the tree to insert new nodes
                // that's where traversal comes in handy, traversal uses recursion to travel through the tree
                // the traversal function should contain the logic of deciding where in the tree we should go
                // every time we traverse, we change the parent node 

                // we can create a while loop that traverses through the tree and finds the right location in the tree 



                this.root.left = new Node(value)
            } else {
                if (value <= this.left
                }
            }

        }
        lookup(value) {

        }

        remove(value) {

        }
    }

    const tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    // tree.insert(6);
    // tree.insert(20);
    // tree.insert(170);
    // tree.insert(15);
    // tree.insert(1);
    // tree.remove(170);
    const visualTree = JSON.stringify(traverse(tree.root));
    console.log(visualTree);
    //     9
    //  4     20
    //1  6  15  170

    function traverse(node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : traverse(node.left); // if the left node is equal to null, then 
        tree.right = node.right === null ? null : traverse(node.right);
        return tree;
    }