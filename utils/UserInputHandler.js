function getUserInput(message) {
    const readline = require('readline-sync');
    return readline.question(message ? message : 'Your input:');
}
module.exports = {
    getUserInput: getUserInput
}