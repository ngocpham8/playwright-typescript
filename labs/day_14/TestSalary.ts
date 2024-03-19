import FTE from './FTE';
import Contractor from './Contractor';
import EmployeeController from './EmployeeController';

// Models
const teo = new FTE('Teo');
const ti = new FTE('Ti');
const tun = new Contractor('Tun');

// Usage of controller
// Racing.run([horse, tiger, dog]);
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log(`Total salary: ${totalSalary}`);



