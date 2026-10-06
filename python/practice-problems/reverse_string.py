# Python strings are immutable, unlike JS strings' char arrays, so this
# operates on a list of characters instead of mutating a string in place.


def reverse_string(s):
    left_pointer = 0
    right_pointer = len(s) - 1
    while left_pointer < right_pointer:
        s[left_pointer], s[right_pointer] = s[right_pointer], s[left_pointer]
        left_pointer += 1
        right_pointer -= 1


chars = list('hello')
reverse_string(chars)
print(chars)  # ['o', 'l', 'l', 'e', 'h']
