import { getId } from "../utils/domHelpers.js";

// This function removes an employee from the employees array and updates the display of employees.  Employee can be removed by name or ID.
const removeEmployeeFunction = (
  employees,
  displayEmployees,
  employeeIdOrName
) => {
  let index;

  // Check if employeeIdOrName is a numeric string
  if (!isNaN(employeeIdOrName) && employees[Number(employeeIdOrName) - 1]) {
    const employeeId = Number(employeeIdOrName);
    index = employeeId - 1;
  } else {
    index = employees.findIndex(
      employee => employee.name.toLowerCase() === employeeIdOrName.toLowerCase()
    );
  }

  if (index < 0 || index >= employees.length) {
    alert("Employee not found");
    return false;
  } else {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
    return employees;
  }
};

export default removeEmployeeFunction;
