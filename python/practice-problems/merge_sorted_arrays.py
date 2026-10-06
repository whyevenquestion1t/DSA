def merge_sorted_arrays(sorted_array1, sorted_array2):
    merged = []
    i = 0
    j = 0

    while i < len(sorted_array1) and j < len(sorted_array2):
        if sorted_array1[i] <= sorted_array2[j]:
            merged.append(sorted_array1[i])
            i += 1
        else:
            merged.append(sorted_array2[j])
            j += 1

    # one of the arrays still has leftover elements, all larger than
    # everything already merged, so just append whatever's left
    merged.extend(sorted_array1[i:])
    merged.extend(sorted_array2[j:])

    return merged


print(merge_sorted_arrays([1, 5, 7], [0, 2, 3]))
# result [0, 1, 2, 3, 5, 7]
