import Employee from "./employee.js";

// The Manager class extends the Employee class and adds a payRate and hours property.  The calculatePay method calculates the annual salary of the manager by multiplying the payRate by the hours worked per week and then subtracting $1000.
class Manager extends Employee {
  constructor(name, age, payRate, hours) {
    super(name, age);
    this.payRate = payRate;
    this.hours = hours;
    this.employeeType = "Full Time";
    this.calculatePay();
  }

  calculatePay() {
    this.annualSalary = this.payRate * this.hours * 52 - 1000;
  }
}

export default Manager;
