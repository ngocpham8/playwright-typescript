import Employee from "./Employee";

export default class Contractor extends Employee {
    constructor(name: string) {
        super(name);
        this.salary = 40000;
    }
}