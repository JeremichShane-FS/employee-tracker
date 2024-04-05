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
import { attachRightClickHandler } from "./utils/rightClick.js";

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
  };

  removeEmployee = employeeIdOrName => {
    removeEmployeeFunction(
      this.employees,
      this.displayEmployees,
      employeeIdOrName
    );
  };
  editEmployee = () => {
    editEmployeeFunction(this.employees, this.displayEmployees);
  };
  displayEmployees = (shouldDisplay = true) => {
    shouldDisplay = localStorage.getItem("shouldDisplay") === "true";
    if (shouldDisplay) {
      displayEmployeesFunction(this.employees, this);
      attachRightClickHandler("employeesTable", this);
    }
  };
  handleContextMenuClick() {
    attachRightClickHandler("employeesTable", this);
  }
  setup() {
    this.displayEmployees();
    this.handleContextMenuClick();
  }
}

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.setup();
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
    const appendForm = (selectedOption, employeeName = "") => {
      formContainer.innerHTML = "";
      switch (selectedOption) {
        case "1":
          formContainer.appendChild(generateAddEmployeeForm(addEmployee));
          window.dispatchEvent(new CustomEvent("formAppended"));
          break;
        case "2":
          formContainer.appendChild(generateRemoveEmployeeForm(removeEmployee));
          window.dispatchEvent(new CustomEvent("formAppended"));
          break;
        case "3":
          formContainer.appendChild(
            generateEditEmployeeForm(editEmployee, employeeName)
          );
          // Dispatch a custom event after the form is appended to the DOM
          window.dispatchEvent(new CustomEvent("formAppended"));
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

    // Listen for the editEmployee event
    window.addEventListener("editEmployee", e => {
      // Call appendForm with the "edit" option and the employee name
      appendForm("3", e.detail.employeeName, true);

      // After the 'editEmployeeForm' is added to the DOM, set the focus to the 'inputPayRate' field
      requestAnimationFrame(() => {
        const inputPayRate = document.getElementById("payRate");
        if (inputPayRate) {
          inputPayRate.focus();
        }
      });
    });

    // Listen for the 'formAppended' event
    window.addEventListener("formAppended", () => {
      // Wait for the next frame to make sure the form is in the DOM
      requestAnimationFrame(() => {
        // Get the 'nameInput' field of the form
        const nameInput = document.getElementById("name");
        if (nameInput) {
          // Set the focus to the 'nameInput' field
          nameInput.focus();
        }
      });
    });

    setCopyright("Employee Management App");
  });
})();
