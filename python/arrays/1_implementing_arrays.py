# We can implement any data structure ourselves, it's a good way to understand how they work

# Python lists are already dynamic arrays, so this class mimics that behavior
# over a plain dict, the way the JS version does over a plain object


class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1

        return self.length

    def pop(self):
        last_item = self.data[self.length - 1]

        del self.data[self.length - 1]
        self.length -= 1

        return last_item

    def delete(self, index):
        item = self.data[index]

        self.shift_items(index)

        return item

    def shift_items(self, index):
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1]

        del self.data[self.length - 1]
        self.length -= 1


new_array = MyArray()

new_array.push('hi')
new_array.push('you')
new_array.push('!')

new_array.pop()

new_array.delete(1)

print(vars(new_array))
