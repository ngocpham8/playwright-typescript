const { getUserInput } = require('../../utils/UserInputHandler');

let string = getUserInput();
words = string.replace(/[,?]/gi, '').split(' ')

let result = {};

for (const word of words) {
    const keys = Object.keys(result);
    if (keys.includes(word)) {
        result[word]++;
    }
    else {
        result[word] = 1;
    }
}

console.log(result);
console.log(Object.entries(result));
