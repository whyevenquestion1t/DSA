As we know, the RAM is indexed, and it’s the property that arrays share with RAM.

If we have an array `const array = [”a”, “b”, “c”, “d”]` , each item in the array is indexed and is mapped in memory. Therefore, we can conclude the following about the different types of operations on Arrays:

1. LookUp O (1) - very easy if you know the index. Like opening the right page of the book
2. Push O (1) - aka append, we just go the end of array and insert a value, since everything is index, we know can quickly identify the end of an array
3. Insert O (N) - Any insert other than the end of an array is linear because it changes the indexes of the already existing in the array items. If we insert a new value in the beginning of the array, **all** of the indexes will be shifted, which results into change of all memory addresses. Which is a much slower operation.
4. Delete O (N) - Any deletion other than the end of the array is slow, for the reasons listed in #3
