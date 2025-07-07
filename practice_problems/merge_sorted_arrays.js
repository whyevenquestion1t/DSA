function mergeSortedArrays(sortedArray1, sortedArray2 ){
    // let length1 = sortedArray1.length;
    // let length2 = sortedArray2;
    // both arrays are already sorted, how can we use pointers here?
    // arrays lengths can be different


    // if the arrays are sorted, we can probably use binary search? 
    // using binary search, we can find the place of insertion for the array
    // should we be using hashmaps here?


    while (sortedArray2.length > 0){
        // every time we iterate through the loop,
        // we need to pop the item from one of the arrays, 
        // i choose the array number 2
        let valueToInsert = sortedArray2.pop()
        
        while (valueToInsert !== null) {

        }
    }

}

mergeSortedArrays([1,5,7] [0,2,3])
// result [0, 1, 2, 5, 7]