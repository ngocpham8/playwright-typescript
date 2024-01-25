// Finding maximum value/minimum value from an integer array

let intArr = [2, 3, 12, 5, 1, 2, 10, 3];

let min = intArr[0];
let max = intArr[0];

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] < min) {
        min = intArr[index];
    }
    else if (intArr[index] > min && intArr[index] > max) {
        max = intArr[index];
    }
}

console.log('Minimum:', min);
console.log('Maximum:', max);


