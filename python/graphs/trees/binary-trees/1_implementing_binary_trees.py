import json


class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
            return self

        current_node = self.root
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = new_node
                    return self
                current_node = current_node.left
            else:
                # duplicates and ties go to the right, mirroring < on the left
                if current_node.right is None:
                    current_node.right = new_node
                    return self
                current_node = current_node.right

    def lookup(self, value):
        current_node = self.root
        while current_node is not None:
            if value == current_node.value:
                return current_node
            current_node = current_node.left if value < current_node.value else current_node.right
        return None

    def remove(self, value):
        self.root = self._remove_node(self.root, value)

    def _remove_node(self, node, value):
        if node is None:
            return None

        if value < node.value:
            node.left = self._remove_node(node.left, value)
            return node
        if value > node.value:
            node.right = self._remove_node(node.right, value)
            return node

        # found the node to remove
        if node.left is None and node.right is None:
            return None
        if node.left is None:
            return node.right
        if node.right is None:
            return node.left

        # two children: replace this node's value with its in-order successor
        # (the smallest value in the right subtree), then remove that successor
        successor = node.right
        while successor.left is not None:
            successor = successor.left
        node.value = successor.value
        node.right = self._remove_node(node.right, successor.value)
        return node


def traverse(node):
    if node is None:
        return None
    return {
        'value': node.value,
        'left': traverse(node.left),
        'right': traverse(node.right),
    }


tree = BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

print(json.dumps(traverse(tree.root)))
#      9
#   4     20
# 1  6  15  170

print(tree.lookup(15).value)  # 15
print(tree.lookup(999))  # None

tree.remove(170)
print(json.dumps(traverse(tree.root)))
