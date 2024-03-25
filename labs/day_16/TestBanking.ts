import BankingController from './BankingController';
import CheckingAccount from './CheckingAccount';
import SavingsAccount from './SavingsAccount';

// Models
const checkingAccount = new CheckingAccount(10000);
const savingsAccount = new SavingsAccount(5000);

// Usage of controller
console.log(`Test checking account: ${JSON.stringify(checkingAccount)}`);
BankingController.deposit(checkingAccount, 100);
BankingController.getBalance(checkingAccount);
BankingController.withdraw(checkingAccount, 10051);
BankingController.getBalance(checkingAccount);

console.log(`Test saving account: ${JSON.stringify(savingsAccount)}`);
BankingController.deposit(savingsAccount, 100);
BankingController.getBalance(savingsAccount);
BankingController.withdraw(savingsAccount, 5200);
BankingController.getBalance(savingsAccount);


