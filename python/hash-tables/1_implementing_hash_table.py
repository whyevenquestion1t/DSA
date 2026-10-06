class HashTable:
    def __init__(self, size):
        self.data = [None] * size

    def _hash(self, key):
        hash_value = 0
        for i, char in enumerate(key):
            hash_value = (hash_value + ord(char) * i) % len(self.data)
        return hash_value

    def set(self, key, value):
        address = self._hash(key)
        self.data[address] = [key, value]
        print(self.data)

    def get(self, key):
        address = self._hash(key)
        return self.data[address]


my_hash_table = HashTable(50)
my_hash_table.set('grapes', 10000)
print(my_hash_table.get('grapes'))
my_hash_table.set('apples', 9)
print(my_hash_table.get('apples'))
print(my_hash_table.data[23])
