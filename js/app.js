import { Manager, PartTime } from "./classes/index.js";
import {
  addEmployeeFunction,
  displayEmployeesFunction,
  editEmployeeFunction,
  removeEmployeeFunction,
} from "./components/index.js";
import employees from "./data/employees.js";
import {
  generateAddEmployeeForm,
  generateDisplayEmployeesForm,
  generateEditEmployeeForm,
  generateRemoveEmployeeForm,
} from "./forms/index.js";
import setCopyright from "./utils/copyright.js";
import { getId } from "./utils/domHelpers.js";

class App {
  constructor() {
    // Try to load employees from localStorage
    const storedEmployees = localStorage.getItem("employees");

    if (storedEmployees) {
      // If there are stored employees, parse them and recreate class instances
      const parsedEmployees = JSON.parse(storedEmployees);
      this.employees = parsedEmployees.map(employee => {
        if (employee.hours >= 40) {
          const manager = new Manager(
            employee.name,
            employee.age,
            employee.payRate,
            employee.hours
          );
          return manager;
        } else if (employee.hours < 40) {
          const partTime = new PartTime(
            employee.name,
            employee.age,
            employee.payRate,
            employee.hours
          );
          return partTime;
        }
      });
    } else {
      // If there are no stored employees, use the data from employees.js
      this.employees = employees;
    }
    this.shouldDisplay = true;
  }

  addEmployee = () => {
    addEmployeeFunction(this.employees, this.displayEmployees);
    // this.displayEmployees();
  };

  removeEmployee = () => {
    removeEmployeeFunction(this.employees, this.displayEmployees);
    // this.displayEmployees();
  };
  editEmployee = () => {
    editEmployeeFunction(this.employees, this.displayEmployees);
    // this.displayEmployees();
  };
  displayEmployees = (shouldDisplay = true) => {
    shouldDisplay = localStorage.getItem("shouldDisplay") === "true";
    if (shouldDisplay) {
      displayEmployeesFunction(this.employees);
    }
  };
}

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    const { addEmployee, removeEmployee, editEmployee, displayEmployees } = app;

    // Get references to the select element and the form container
    const selectElement = getId("option");
    const formContainer = getId("formContainer");

    window.onload = () => {
      // Get shouldDisplay from local storage
      let shouldDisplay = localStorage.getItem("shouldDisplay");

      // If shouldDisplay is not set in local storage, set it to true
      if (shouldDisplay === null) {
        shouldDisplay = "true";
        localStorage.setItem("shouldDisplay", shouldDisplay);
      }

      // Display employees by default if shouldDisplay is true
      if (shouldDisplay === "true") {
        displayEmployees(true);
      }
    };

    // Listen for changes on the select element and update the form container.  The form container is cleared before appending the new form.
    selectElement.addEventListener("change", e => {
      formContainer.innerHTML = "";
      const selectedOption = e.target.value;
      localStorage.setItem("selectedOption", selectedOption);
      appendForm(selectedOption);
    });

    // Function to append the appropriate form based on the selected option
    const appendForm = selectedOption => {
      switch (selectedOption) {
        case "1":
          formContainer.appendChild(generateAddEmployeeForm(addEmployee));
          break;
        case "2":
          formContainer.appendChild(generateRemoveEmployeeForm(removeEmployee));
          break;
        case "3":
          formContainer.appendChild(generateEditEmployeeForm(editEmployee));
          break;
        case "4":
          formContainer.appendChild(
            generateDisplayEmployeesForm(displayEmployees)
          );
          break;
      }
    };

    // Get the selected option from localStorage
    const storedOption = localStorage.getItem("selectedOption");

    // If a selected option is found in localStorage, set it as the selected option
    // in the select element and append the corresponding form to the formContainer
    if (storedOption) {
      selectElement.value = storedOption;
      appendForm(storedOption);
    }

    setCopyright("Employee Management App");
  });
})();
