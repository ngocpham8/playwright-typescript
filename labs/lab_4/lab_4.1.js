const readline = require('readline-sync')

// Write a consolse interface app to:

// allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
// allow user to withdraw the money and avoid user to take more than current balance
// Note: Strongly recommend to create functions to process each tasks
// === Banking application===
// 1. Find an account
// 2. Update balance
// 0. Exit the program

let account1 = {
    accountNumber: '001',
    routingNumber: '111',
    balance: 2000000
}

let account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = '002'

const bankAccounts = [account1, account2]

// when user still wants to play, show game menu
// Get user option then process
let isPlaying = true;
while (isPlaying) {
    printGameMenu();
    let userOption = getUserOption('Please select your option:');

    if (userOption == 0) {
        isPlaying = false;
    }
    else if (userOption == 1) {
        // Find an account
        let accountUserInput = getUserOption('Please input account number to find:');
        findAccount(accountUserInput);
    }
    else if (userOption == 2) {
        // UpdateBalance
        let accountUserInput = getUserOption('Please input account number you want to withdraw:');
        let amountUserInput = getUserOption('Please input money amount you want to withdraw:');
        updateBalance(accountUserInput, amountUserInput);
    }
    else {
        console.log('Invalid user input')
    }
}

console.log('See you!')

function findAccount(numberUserInput) {
    let accountFound;
    for (const account of bankAccounts) {
        if (account.accountNumber === numberUserInput) {
            console.log('Found an account with accountNumber: ', account.accountNumber, ' and balance: ', account.balance)
            accountFound = account;
        }
    }

    if (!accountFound) {
        console.log('Not found any account number', numberUserInput)
    }

    return accountFound;
}

function updateBalance(accountUserInput, amountUserInput) {
    const userAccount = findAccount(accountUserInput);
    const amountToWithdraw = Number(amountUserInput);
    if (userAccount != null) {
        if (amountToWithdraw < 0) {
            console.log('Money can not be negative number')
        } else if (0 < amountToWithdraw && amountToWithdraw <= userAccount.balance) {
            userAccount.balance = userAccount.balance - amountToWithdraw;
            console.log('Withdraw successfully: ', amountToWithdraw, ' .Your balance now is :', userAccount.balance)
        }
        else {
            console.log('Not enough balance to withdraw')
        }
    }
}

function getUserOption(message) {
    return readline.question(message)
}

function printGameMenu() {
    console.log('=== Banking application===')
    console.log('1. Find an account')
    console.log('2. Update balance')
    console.log('0. Exit the program')
}