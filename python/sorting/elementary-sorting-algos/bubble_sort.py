numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


def bubble_sort(array):
    length = len(array)
    for i in range(length):
        for j in range(length - 1):
            if array[j] > array[j + 1]:
                # Swap the numbers
                array[j], array[j + 1] = array[j + 1], array[j]


bubble_sort(numbers)
print(numbers)

# the way that this algo works is by comparing the value at index x with the value at index + 1,
# if the value at index is greater than the value at index x + 1, then we want to swap those two numbers
# the bubble sort "bubbles up" higher value numbers to the end of the array
# since there are two loops, the time complexity here is O(N^2), making it not the most desirable algo
# the outer loop makes sure that the inner loop has run the same amount of times as there are elements in the array
# the inner loop simply iterates through the full array

# the space complexity here is O(1) because the array is being mutated in place without
# creating more unnecessary space other than the swap
