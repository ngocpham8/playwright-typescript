// Function Programming: 
// multiple functions -> export func1, export func2

import Employee from "./Employee";

// class: class functions
export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        })
        return totalSalary;
    }

    static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
        let highest = employeeList[0];
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].getSalary > highest.getSalary) {
                highest = employeeList[i]
            }
        }
        return highest;
    }
}