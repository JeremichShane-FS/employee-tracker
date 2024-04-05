import { getId } from "../utils/domHelpers.js";

// The editEmployeeFunction function takes in two parameters: employees and displayEmployees and returns a function that edits an employee in the employees array and updates the display of employees.
const editEmployeeFunction = (employees, displayEmployees) => {
  const name = getId("name");
  const inputPayRate = getId("payRate");
  const nameOrId = name.value;
  const payRate = inputPayRate.value;

  // If the employee number and pay rate are provided, find the employee in the employees array and update the pay rate
  if (nameOrId && payRate) {
    const index = employees.findIndex(
      (employee, id) =>
        id + 1 == nameOrId ||
        employee.name.toLowerCase() == nameOrId.toLowerCase()
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
