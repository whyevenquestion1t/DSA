/**
 Do not return anything, modify s in-place instead.
 */

 function reverseString(s) {
    let leftPointer = 0;
    let  rightPointer = s.length -1;
    while (leftPointer < rightPointer) {
        let temporaryStorage = s[leftPointer]; // ephemeral storage
        s[leftPointer] = s[rightPointer]; 
        s[rightPointer] = temporaryStorage;
        leftPointer++;
        rightPointer--;
    }
}