import { getId } from "../utils/domHelpers.js";

// This function removes an employee from the employees array and updates the display of employees.  Employee can be removed by name or ID.
const removeEmployeeFunction = (employees, displayEmployees) => {
  const nameElement = getId("name");
  const employeeName = nameElement.value.toLowerCase();
  const employeeInput = nameElement.value;

  if (employeeName) {
    // Find the index of the employee with the given namel
    const index = employees.findIndex(
      (employee, id) =>
        id + 1 == employeeInput || employee.name.toLowerCase() == employeeName
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
