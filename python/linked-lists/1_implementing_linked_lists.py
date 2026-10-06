class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)
        self.tail = self.head
        self.length = 1

    def append(self, value):
        new_node = Node(value)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return self

    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        return self

    # traverse to the node right before the given index, so insert/remove
    # can rewire its `next` pointer
    def traverse_to_index(self, index):
        counter = 0
        current_node = self.head
        while counter != index:
            current_node = current_node.next
            counter += 1
        return current_node

    def insert(self, index, value):
        if index <= 0:
            return self.prepend(value)
        if index >= self.length:
            return self.append(value)

        new_node = Node(value)
        leader = self.traverse_to_index(index - 1)
        holding_pointer = leader.next
        leader.next = new_node
        new_node.next = holding_pointer
        self.length += 1
        return self

    def remove(self, index):
        if index <= 0:
            self.head = self.head.next
            self.length -= 1
            return self

        leader = self.traverse_to_index(index - 1)
        unwanted_node = leader.next
        leader.next = unwanted_node.next
        if unwanted_node is self.tail:
            self.tail = leader
        self.length -= 1
        return self

    def print_list(self):
        values = []
        current_node = self.head
        while current_node is not None:
            values.append(current_node.value)
            current_node = current_node.next
        print(values)


my_linked_list = LinkedList(10)
my_linked_list.append(5)
my_linked_list.append(16)
my_linked_list.prepend(1)
my_linked_list.insert(2, 99)
my_linked_list.print_list()  # [1, 10, 99, 5, 16]

my_linked_list.remove(2)
my_linked_list.print_list()  # [1, 10, 5, 16]

# Unlike lists, a linked list only needs to update a couple of pointers to
# insert or remove a node, instead of shifting every element after it.
# The tradeoff is lookup: there's no index-based access, so finding a node
# by position means walking the list from the head, which is O(n).
