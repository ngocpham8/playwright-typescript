import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    private minimumBalance: number = 0;
    constructor(accountId: string, balance: number) {
        super(accountId, balance);
    }

    deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.validateAmount(amount);
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        }
        else {
            console.log(`ERROR: Can not withdraw ${amount}. Current balance is: ${this.balance}.
                         Maximum account you can withdraw is ${this.balance - this.minimumBalance}.`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

    // support method
    private validateAmount(balance: number) {
        if (balance < 0) {
            throw new Error("Balance can not be negative");
        }
    }
}