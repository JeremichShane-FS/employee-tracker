import { createEl } from "../utils/domHelpers.js";

// This function generates a form for editing an employee's information.  The form contains two input fields: one for the employee's number and one for the employee's pay rate. When the submit button is clicked, the editEmployee function is called.
const generateEditEmployeeForm = editEmployee => {
  const form = createEl("form");

  // Create label and input for employee number
  const labelEmployeeNumber = createEl("label");
  labelEmployeeNumber.htmlFor = "employeeNumber";
  labelEmployeeNumber.textContent = "Employee Number:";
  const inputEmployeeNumber = createEl("input");
  inputEmployeeNumber.type = "text";
  inputEmployeeNumber.id = "employeeNumber";
  inputEmployeeNumber.name = "employeeNumber";

  // Create label and input for pay rate
  const labelPayRate = createEl("label");
  labelPayRate.htmlFor = "payRate";
  labelPayRate.textContent = "Pay Rate:";
  const inputPayRate = createEl("input");
  inputPayRate.type = "number";
  inputPayRate.id = "payRate";
  inputPayRate.name = "payRate";

  // Create submit button
  const submitInput = createEl("input");
  submitInput.type = "submit";
  submitInput.id = "editEmployeeSubmit";
  submitInput.value = "Submit";

  // Append all elements to form
  form.appendChild(labelEmployeeNumber);
  form.appendChild(inputEmployeeNumber);
  form.appendChild(labelPayRate);
  form.appendChild(inputPayRate);
  form.appendChild(submitInput);

  // Add event listener to the button
  submitInput.addEventListener("click", e => {
    e.preventDefault();
    editEmployee();
  });

  return form;
};

export default generateEditEmployeeForm;
