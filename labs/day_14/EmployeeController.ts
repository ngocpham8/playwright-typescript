import Employee from "./Employee";
export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary: number = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        })
        return totalSalary;
    }

    static getHighestSalaryEmployee(employeeList: Employee[]): Employee[] {
        let highestSalary: number = Math.max(...employeeList.map(employee => employee.getSalary()));
        let highestSalaryEmployeeList: Employee[] = [];
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].getSalary() === highestSalary) {
                highestSalaryEmployeeList.push(employeeList[i]);
            }
        }
        return highestSalaryEmployeeList;
    }

    static getLowestSalaryEmployee(employeeList: Employee[]): Employee[] {
        let lowestSalary: number = Math.min(...employeeList.map(employee => employee.getSalary()));
        let lowestSalaryEmployeeList: Employee[] = [];
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].getSalary() === lowestSalary) {
                lowestSalaryEmployeeList.push(employeeList[i]);
            }
        }
        return lowestSalaryEmployeeList;
    }

    static sortByName(employeeList: Employee[], direction: string = 'ASC'): Employee[] {
        let sortedByName = employeeList.sort(function (a: Employee, b: Employee) {
            if (a.getName() < b.getName()) {
                return -1;
            }
            if (a.getName() > b.getName()) {
                return 1;
            }
            return 0;
        });

        if (direction === 'DESC') {
            sortedByName.reverse();
        }

        return sortedByName;
    }

    static sortBySalary(employeeList: Employee[], direction: string = 'ASC'): Employee[] {
        let sortedEmployee: Employee[] = employeeList.sort((a: Employee, b: Employee) => a.getSalary() - b.getSalary());

        if (direction === 'DESC') {
            sortedEmployee.reverse();
        }

        return sortedEmployee;
    }
}