function getUserInput() {
    const readline = require('readline-sync')
    return readline.question('Your input:')
}
module.exports = {
    getUserInput: getUserInput
}