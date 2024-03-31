import Manager from "../classes/manager.js";
import PartTime from "../classes/partTime.js";

// Create an array of employees
const employees = [
  new Manager("Scott", 30, 10, 40),
  new Manager("Dave", 35, 5, 40),
  new PartTime("Lisa", 25, 8, 12),
];

export default employees;
