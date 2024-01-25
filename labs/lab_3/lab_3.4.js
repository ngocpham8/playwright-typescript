//Merge 2 SORTED integer array into one SORTED array

let intArr1 = [1, 12, 16, 28, 34, 105, 108, 120, 125]
let intArr2 = [1, 2, 13, 16, 27, 99, 100, 103]

// // Solution 1: Combine 2 array then sort
let combineArr = intArr1.concat(intArr2)
for (let i = 0; i < combineArr.length; i++) {
    for (let j = 0; j < combineArr.length - 1 - i; j++) {
        if (combineArr[j] > combineArr[j + 1]) {
            let temp = combineArr[j];
            combineArr[j] = combineArr[j + 1];
            combineArr[j + 1] = temp;
        }
    }
}
console.log('Sorted array:', combineArr);
