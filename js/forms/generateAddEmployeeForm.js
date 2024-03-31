import { createEl } from "../utils/domHelpers.js";

// This function generates a form to add an employee.  The form contains four input fields: one for the employee's name, one for the employee's age, one for the employee's pay rate, and one for the employee's hours per week.
const generateAddEmployeeForm = addEmployee => {
  // Create form
  const form = createEl("form");
  form.id = "addEmployeeForm";

  // Create label and input for name
  const nameLabel = createEl("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Name:";
  const nameInput = createEl("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.maxLength = 20;
  nameInput.required = true;
  nameInput.pattern = "^[a-zA-Zs]*$";
  nameInput.title = "Please enter only letters and spaces";

  // Create label and input for age
  const ageLabel = createEl("label");
  ageLabel.for = "age";
  ageLabel.textContent = "Age:";
  const ageInput = createEl("input");
  ageInput.type = "number";
  ageInput.id = "age";
  ageInput.name = "age";
  ageInput.step = "1";
  ageInput.min = "13";
  ageInput.max = "100";
  ageInput.required = true;

  // Create label and input for pay rate
  const payRateLabel = createEl("label");
  payRateLabel.for = "payRate";
  payRateLabel.textContent = "Pay Rate:";
  const payRateInput = createEl("input");
  payRateInput.type = "number";
  payRateInput.id = "payRate";
  payRateInput.name = "payRate";
  payRateInput.step = "1";
  payRateInput.min = "1";
  payRateInput.max = "100";
  payRateInput.required = true;

  // Create label and input for hours per week
  const hoursLabel = createEl("label");
  hoursLabel.for = "hours";
  hoursLabel.textContent = "Hours per week:";
  const hoursInput = createEl("input");
  hoursInput.type = "number";
  hoursInput.id = "hours";
  hoursInput.name = "hours";
  hoursInput.step = "1";
  hoursInput.min = "1";
  hoursInput.max = "60";
  hoursInput.required = true;

  // Create submit button
  const submitButton = createEl("input", "btn");
  submitButton.type = "submit";
  submitButton.value = "Submit";

  // Add event listener to form
  form.addEventListener("submit", e => {
    e.preventDefault();
    addEmployee();
    form.reset();
    nameInput.focus();
  });

  // Append all elements to form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(ageLabel);
  form.appendChild(ageInput);
  form.appendChild(payRateLabel);
  form.appendChild(payRateInput);
  form.appendChild(hoursLabel);
  form.appendChild(hoursInput);
  form.appendChild(submitButton);

  return form;
};

export default generateAddEmployeeForm;
