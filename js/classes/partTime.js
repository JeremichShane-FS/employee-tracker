import Employee from "./employee.js";

// The PartTime class extends the Employee class and adds a payRate and hours property.  The calculatePay method calculates the annual salary of the part-time employee by multiplying the payRate by the hours worked per week and then multiplying by 52.
class PartTime extends Employee {
  constructor(name, age, payRate, hours) {
    super(name, age);
    this.payRate = payRate;
    this.hours = hours;
    this.employeeType = "Part Time";
    this.calculatePay();
  }

  calculatePay() {
    this.annualSalary = this.payRate * this.hours * 52;
  }
}

export default PartTime;
