export default abstract class BankingAccount {
    protected accountId: string = '';
    protected balance: number = 0;

    constructor(accountId: string, balance: number) {
        this.validateBalance(balance);
        this.accountId = accountId;
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

