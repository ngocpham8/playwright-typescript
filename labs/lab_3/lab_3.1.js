// Count how many odd, even number(s) in an integer array


let intArr = [1, 2, 3, 4, 5, 6, 8, 10, 11];

// 1. Use filter
let evenArr = intArr.filter(getEvenNumbers);

function getEvenNumbers(value, index, array) {
    return value % 2 === 0;
}

evenNumberCount = evenArr.length; 
console.log('Even numbers:', evenNumberCount);
console.log('Odd numbers:', intArr.length - evenNumberCount);

// let evenNumberCount = 0;
// let oddNumberCount = 0;

// 2. Use for loop
// for (let index = 0; index < intArr.length; index++) {
//     if (intArr[index] % 2 === 0) {
//         evenNumberCount += 1;
//     } else {
//         oddNumberCount += 1;
//     }
// }
// console.log('Even numbers:', evenNumberCount);
// console.log('Odd numbers:', oddNumberCount);


