function devide(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    let upRoundedValue = Math.round(result);
    return upRoundedValue;
}

function isEven(number) {
    return number % 2 === 0;
}

module.exports = {
    devide: devide,
    isEven: isEven
}