export default abstract class BankingAccount {
    protected balance: number = 0;

    constructor(balance: number) {
        this.validateBalance(balance);
        this.balance = balance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;

    // support method
    private validateBalance(balance: number) {
        if (balance < 0) {
            throw new Error("Balance can not be negative");
        }
    }
}

