import BankingController from './BankingController';
import CheckingAccount from './CheckingAccount';
import SavingsAccount from './SavingsAccount';

// Models
const checkingAccount = new CheckingAccount('001', 10000);
const savingsAccount = new SavingsAccount('002', 5000);

// Usage of controller
console.log(`Test checking account: ${JSON.stringify(checkingAccount)}`);
BankingController.deposit(checkingAccount, 100);
console.log(`After depositing account: ${JSON.stringify(BankingController.getBalance(checkingAccount))}`);
BankingController.withdraw(checkingAccount, 10051);
console.log(`After withdrawing account: ${JSON.stringify(BankingController.getBalance(checkingAccount))}`);

console.log(`Test saving account: ${JSON.stringify(savingsAccount)}`);
BankingController.deposit(savingsAccount, 100);
console.log(`After depositing account: ${JSON.stringify(BankingController.getBalance(savingsAccount))}`);
BankingController.withdraw(savingsAccount, 5200);
console.log(`After withdrawing account: ${JSON.stringify(BankingController.getBalance(savingsAccount))}`);

