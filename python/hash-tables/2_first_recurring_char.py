# Google Question
# Given an array = [2,5,1,2,3,5,1,2,4]:
# It should return 2

# Given an array = [2,1,1,2,3,5,1,2,4]:
# It should return 1

# Given an array = [2,3,4,5]:
# It should return None

# Hash table is an answer
def first_recurring_character(input_list):
    seen = {}
    for i, indexed_value in enumerate(input_list):
        if indexed_value in seen:
            return indexed_value
        else:
            print('Inserting the value of indexed_value into the map', indexed_value)
            seen[indexed_value] = i
    return None


print(first_recurring_character([2, 5, 1, 2, 3, 5, 1, 2, 4]))
print(first_recurring_character([2, 1, 1, 2, 3, 5, 1, 2, 4]))
print(first_recurring_character([2, 3, 4, 5]))

# Even though we didn't use a hashing function here, we were able to solve this
# problem with O(N) time and space complexity using a dict the same way the JS
# version uses array indexes: each unique value is checked against the set of
# values already seen, so a recurring value is found the moment it's seen twice.
