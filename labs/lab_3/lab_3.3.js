//Do NOT use any built-in sort method. Please write a sort logic to sort an integer array from min to max

let intArr = [12, 34, 1, 16, 28]
//Compare 2 value. if a > b then swap b -> a for correct postion
for (let i = 0; i < intArr.length; i++) {
    for (let j = 0; j < intArr.length - 1 - i; j++) {
        if (intArr[j] > intArr[j + 1]) {
            let temp = intArr[j];
            intArr[j] = intArr[j + 1];
            intArr[j + 1] = temp;
        }
    }
}
console.log('Sorted array:', intArr);

