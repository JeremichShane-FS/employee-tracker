import { createEl } from "../utils/domHelpers.js";

// This function generates a form for editing an employee's information.  The form contains two input fields: one for the employee's number and one for the employee's pay rate. When the submit button is clicked, the editEmployee function is called.
const generateEditEmployeeForm = (editEmployee, employeeName = "") => {
  const form = createEl("form");
  form.id = "editEmployeeForm";

  // Create label and input for employee number
  const labelEmployeeNumber = createEl("label");
  labelEmployeeNumber.htmlFor = "name";
  labelEmployeeNumber.textContent = "Employee: (Name or ID)";
  const inputEmployee = createEl("input");
  inputEmployee.type = "text";
  inputEmployee.id = "name";
  inputEmployee.name = "name";
  inputEmployee.required = true;

  // Create label and input for pay rate
  const labelPayRate = createEl("label");
  labelPayRate.htmlFor = "payRate";
  labelPayRate.textContent = "Pay Rate:";
  const inputPayRate = createEl("input");
  inputPayRate.type = "number";
  inputPayRate.id = "payRate";
  inputPayRate.name = "payRate";
  inputPayRate.min = "0";
  inputPayRate.max = "100";
  inputPayRate.step = "0.01";
  inputPayRate.required = true;

  // Create submit button
  const submitInput = createEl("input", "btn");
  submitInput.type = "submit";
  submitInput.id = "editEmployeeSubmit";
  submitInput.value = "Submit";

  // Append all elements to form
  form.appendChild(labelEmployeeNumber);
  form.appendChild(inputEmployee);
  inputEmployee.value = employeeName;
  inputEmployee.focus();
  form.appendChild(labelPayRate);
  form.appendChild(inputPayRate);
  form.appendChild(submitInput);
  // Add event listener to the button
  form.addEventListener("submit", e => {
    e.preventDefault();
    editEmployee();
    form.reset();
    inputEmployee.focus();
  });

  return form;
};

export default generateEditEmployeeForm;
