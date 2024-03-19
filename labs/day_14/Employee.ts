export default class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }
}