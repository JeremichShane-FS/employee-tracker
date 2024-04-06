import { Manager, PartTime } from "../classes/index.js";

// Create an array of employees
const employees = [
  new Manager("Scott", 30, 10, 40),
  new Manager("Dave", 35, 5, 40),
  new PartTime("Lisa", 25, 8, 12),
  new Manager("John", 40, 15, 40),
  new Manager("Jane", 45, 20, 40),
  new PartTime("Sue", 30, 8, 12),
  new Manager("Mike", 50, 25, 40),
  new Manager("Mary", 55, 30, 40),
  new PartTime("Tom", 35, 8, 12),
  new Manager("Chris", 60, 35, 40),
];

export default employees;
