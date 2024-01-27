//Merge 2 SORTED integer array into one SORTED array

// // Solution 1: Combine 2 array then sort
// let intArr1 = [1, 12, 16, 28, 34, 105, 108, 120, 125]
// let intArr2 = [1, 2, 13, 16, 27, 99, 100, 103]
// let combineArr = intArr1.concat(intArr2)
// for (let i = 0; i < combineArr.length; i++) {
//     for (let j = 0; j < combineArr.length - 1 - i; j++) {
//         if (combineArr[j] > combineArr[j + 1]) {
//             let temp = combineArr[j];
//             combineArr[j] = combineArr[j + 1];
//             combineArr[j + 1] = temp;
//         }
//     }
// }
// console.log('Sorted array:', combineArr);

// Solution 2: check each value of intArr1 and insert into correct postion of intArr2
let intArr1 = [1, 12, 16, 28, 34, 105, 108, 120, 125]
let intArr2 = [1, 2, 13, 16, 27, 99, 100, 103]
while (intArr1.length > 0) {
    let isFoundPosition = false;
    let j = 0;
    while (!isFoundPosition) {
        if (intArr1[0] <= intArr2[j]) {
            intArr2.splice(j, 0, intArr1[0]);
            isFoundPosition = true;
        }
        else if (intArr1[0] > intArr2[j] && intArr1[0] <= intArr2[j + 1]) {
            intArr2.splice(j + 1, 0, intArr1[0]);
            isFoundPosition = true;
        }
        else if (intArr1[0] > intArr2[intArr2.length - 1]) {
            intArr2.push(intArr1[0]);
            isFoundPosition = true;
        }
        j++;
    }
    intArr1.shift();
}

console.log('Sorted array:', intArr2);