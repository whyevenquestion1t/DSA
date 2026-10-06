numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


def counting_sort(arr, max_value, min_value):
    count = [0] * (max_value - min_value + 1)

    for value in arr:
        count[value - min_value] += 1

    sorted_arr = []
    for i in range(min_value, max_value + 1):
        while count[i - min_value] > 0:
            sorted_arr.append(i)
            count[i - min_value] -= 1

    return sorted_arr


answer = counting_sort(numbers, max(numbers), min(numbers))
print(answer)
