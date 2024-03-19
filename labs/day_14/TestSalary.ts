import FTE from './FTE';
import Contractor from './Contractor';
import EmployeeController from './EmployeeController';

// Models
const employee1 = new FTE('Ted');
const employee2 = new FTE('Alice');
const employee3 = new FTE('Bob');
const employee4 = new Contractor('Nick');
const employee5 = new Contractor('Anna');
const employeeList = [employee1, employee2, employee3, employee4, employee5];

// Usage of controller
const totalSalary = EmployeeController.getTotalSalary(employeeList);
console.log(`Total salary: ${totalSalary}`);

// print out the employee with highest/lowest salary
const highestEmployeeSalary = JSON.stringify(EmployeeController.getHighestSalaryEmployee(employeeList));
console.log(`List employee with highest salary: ${highestEmployeeSalary}`);
const lowestEmployeeSalary = JSON.stringify(EmployeeController.getLowestSalaryEmployee(employeeList));
console.log(`List employee with lowest salary: ${lowestEmployeeSalary}`);

//Research and try to sort employees base on salary, name
const DIRECTIONSORT: string = 'ASC';
const employeeListSortedByName = JSON.stringify(EmployeeController.sortByName(employeeList, DIRECTIONSORT));
console.log(`Employee sort by name: ${employeeListSortedByName}`);
const employeeListSortedBySalary = JSON.stringify(EmployeeController.sortBySalary(employeeList, DIRECTIONSORT));
console.log(`Employee sort by salary: ${employeeListSortedBySalary}`);




