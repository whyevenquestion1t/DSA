function mergeSortedArrays(sortedArray1, sortedArray2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < sortedArray1.length && j < sortedArray2.length) {
    if (sortedArray1[i] <= sortedArray2[j]) {
      merged.push(sortedArray1[i]);
      i++;
    } else {
      merged.push(sortedArray2[j]);
      j++;
    }
  }

  // one of the arrays still has leftover elements, all larger than
  // everything already merged, so just append whatever's left
  while (i < sortedArray1.length) {
    merged.push(sortedArray1[i]);
    i++;
  }
  while (j < sortedArray2.length) {
    merged.push(sortedArray2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSortedArrays([1, 5, 7], [0, 2, 3]));
// result [0, 1, 2, 3, 5, 7]
