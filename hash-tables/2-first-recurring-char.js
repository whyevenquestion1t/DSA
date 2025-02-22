// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Hash table is an answer
function firstRecurringCharacter2(input) {
    let map = [];
    for (let i = 0; i < input.length; i++) {
        let indexedValue = input[i]
        let char = map[indexedValue]
            // We cannot use if(char) because it will return false if char == 0, we can 
            // only use if(char !== undefined) in this case to see it exists in the map
        if (char !== undefined) {
            return indexedValue;
        } else {
            console.log("Inserting the value of indexedValue into the map", indexedValue)
            map[indexedValue] = i;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 3, 4, 5]))

// Even though we didn't use a hashing function, and we didn't use a hashing table, we were able to solve this problem with O(N) time and space complexity by using the tricks that hashing tables provide us with. What we did here is we used the nature of indexes to help us find a recurring character. Knowing that every unique character has a unique index, we can find common characters by seeing if the "hashing" of the character will resolve to the same index. If it does, we know that the character is recurring.