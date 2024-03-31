import { getId } from "../utils/domHelpers.js";

// The removeEmployeeFunction function takes in two parameters: employees and displayEmployees and returns a function that removes an employee from the employees array and updates the display of employees.  Normally I would use a unique identifier like an UUID or some other unique ID type to remove an employee, but per instructions of this assignment, I am using the employee's name to remove the employee.
const removeEmployeeFunction = (employees, displayEmployees) => {
  const nameElement = getId("name");
  const employeeName = nameElement.value.toLowerCase();

  if (employeeName) {
    // Find the index of the employee with the given name
    const index = employees.findIndex(
      employee => employee.name.toLowerCase() === employeeName
    );

    if (index === -1) {
      alert("Employee not found");
      return false;
    } else {
      employees.splice(index, 1);
      localStorage.setItem("employees", JSON.stringify(employees));
      displayEmployees();
      return true;
    }
  }
};

export default removeEmployeeFunction;
