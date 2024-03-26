import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    private overdraftLimit: number = 50;
    constructor(accountId: string, balance: number) {
        super(accountId, balance);
    }

    deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.validateAmount(amount);
        if (this.balance - amount >= this.overdraftLimit) {
            this.balance -= amount;
        }
        else {
            console.log(`ERROR: Can not withdraw ${amount}. Current balance is: ${this.balance}.
                            Should be left ${this.overdraftLimit}`);
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