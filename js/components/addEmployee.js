import { Manager, PartTime } from "../classes/index.js";
import { getId } from "../utils/domHelpers.js";

// The addEmployeeFunction function takes in two parameters: employees and displayEmployees and returns a function that adds an employee to the employees array and updates the display of employees.
const employeeCounters = {};

const addEmployeeFunction = (employees, displayEmployees) => {
  let name = getId("name").value.toLowerCase();
  const age = Number(getId("age").value);
  const payRate = Number(getId("payRate").value);
  const hours = Number(getId("hours").value);

  // The handleSubmit function checks if the employee name already exists in the employees array. If it does, it increments the employee counter for that name and appends the counter to the name.
  const handleSubmit = () => {
    const form = getId("addEmployeeForm");
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    const existingEmployeeIndex = employees.findIndex(
      employee => employee.name.toLowerCase() === name
    );
    if (existingEmployeeIndex !== -1) {
      if (!employeeCounters[name]) {
        employeeCounters[name] = 0;
      }
      name = `${name}${++employeeCounters[name]}`;
    }
    return true;
  };

  // If handleSubmit returns true, the function creates a new employee object based on the hours worked. If the hours worked are greater than or equal to 40, a new Manager object is created; otherwise, a new PartTime object is created. The new employee object is added to the employees array and the updated employees array is stored in the local storage. The displayEmployees function is then called to update the display of employees.
  if (handleSubmit()) {
    const employee =
      hours >= 40
        ? new Manager(name, age, payRate, hours)
        : new PartTime(name, age, payRate, hours);

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
  }
};

export default addEmployeeFunction;
