import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    private minimumBalance: number = 0;
    constructor(balance: number) {
        super(balance);
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
            console.log(`ERROR: Can not withdraw. The minimum balance should be ${this.minimumBalance}`);
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