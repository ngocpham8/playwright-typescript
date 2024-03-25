import BankingAccount from "./BankingAccount";

export default class BankingController {

    static deposit(bankAccount: BankingAccount, amount: number): void {
        console.log(`Deposit ${amount} into ${JSON.stringify(bankAccount)}`)
        bankAccount.deposit(amount);
    }

    static withdraw(bankAccount: BankingAccount, amount: number): void {
        console.log(`Withdraw ${amount} from ${JSON.stringify(bankAccount)}`)
        bankAccount.withdraw(amount);
    }

    static getBalance(bankAccount: BankingAccount): number {
        console.log(`Checking current balance of account ${JSON.stringify(bankAccount)}`);
        const currentBalance = bankAccount.getBalance();
        console.log(`Current balance of account is: ${currentBalance}`);
        return currentBalance;
    }
}