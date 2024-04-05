import { getId } from "../utils/domHelpers.js";

// The editEmployeeFunction function takes in two parameters: employees and displayEmployees and returns a function that edits an employee in the employees array and updates the display of employees.
const editEmployeeFunction = (employees, displayEmployees) => {
  const inputEmployee = getId("name");
  const inputPayRate = getId("payRate");
  const employeeInput = inputEmployee.value;
  const payRate = inputPayRate.value;

  // If the employee number and pay rate are provided, find the employee in the employees array and update the pay rate
  if (employeeInput && payRate) {
    const index = employees.findIndex(
      (employee, id) =>
        id + 1 == employeeInput ||
        employee.name.toLowerCase() == employeeInput.toLowerCase()
    );
    // If the employee is not found, show an alert and return false
    if (index === -1) {
      alert("Employee not found");
      return false;
    } else {
      // If the employee is found, update the pay rate and calculate the pay
      employees[index].payRate = Number(payRate);
      employees[index].calculatePay();
      localStorage.setItem("employees", JSON.stringify(employees));
      displayEmployees();
      return true;
    }
  }

  return false;
};

export default editEmployeeFunction;
