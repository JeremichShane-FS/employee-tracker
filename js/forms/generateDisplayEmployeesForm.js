import { createEl, getId } from "../utils/domHelpers.js";

// Function to generate form to display/hide employees list based on shouldDisplay value in local storage and buttonState value in local storage to update button text.  Also, add event listener to displayButton to toggle display of employeeList and update button text based on shouldDisplay value in local storage.
const generateDisplayEmployeesForm = displayEmployees => {
  const form = createEl("form");
  form.id = "displayEmployeesForm";
  const displayButton = createEl("button", "btn");
  displayButton.textContent = "Hide Employees";
  let buttonState = localStorage.getItem("buttonState");
  let shouldDisplay = localStorage.getItem("shouldDisplay") === "true";

  if (buttonState === "hide") {
    displayButton.textContent = "Hide Employees";
  } else if (buttonState === "display") {
    displayButton.textContent = "Display All Employees";
  }
  // Get employeeList element and set display to none if shouldDisplay is false in local storage or true if shouldDisplay is true in local storage
  const employeeList = getId("output");
  employeeList.style.display = shouldDisplay ? "block" : "none";
  displayButton.addEventListener("click", e => {
    e.preventDefault();
    shouldDisplay = employeeList.style.display !== "none";
    employeeList.style.display = shouldDisplay ? "none" : "block";
    localStorage.setItem("shouldDisplay", !shouldDisplay ? "true" : "false");

    // Call displayEmployees after shouldDisplay value is updated in local storage
    displayEmployees(!shouldDisplay);

    if (!shouldDisplay) {
      displayButton.textContent = "Hide Employees";
      localStorage.setItem("buttonState", "hide");
    } else {
      displayButton.textContent = "Display All Employees";
      localStorage.setItem("buttonState", "display");
    }
  });

  form.appendChild(displayButton);
  return form;
};

export default generateDisplayEmployeesForm;
