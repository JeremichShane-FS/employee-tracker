import { createEl } from "../utils/domHelpers.js";

// The generateRemoveEmployeeForm function returns a form with a text input field for the employee's name and a submit button.  When the submit button is clicked, the removeEmployee function is called.
const generateRemoveEmployeeForm = removeEmployee => {
  const existingForm = document.getElementById("removeEmployeeForm");
  if (existingForm) existingForm.remove();

  const form = createEl("form");
  form.id = "removeEmployeeForm";
  form.className = "hidden";

  // Create label and input for name
  const label = createEl("label");
  label.htmlFor = "name";
  label.textContent = "Employee: (Name or ID)";
  const textInput = createEl("input");
  textInput.type = "text";
  textInput.id = "name";
  textInput.name = "name";

  // Create submit input
  const submitInput = createEl("input", "btn");
  submitInput.type = "submit";
  submitInput.id = "removeEmployeeSubmit";
  submitInput.value = "Submit";

  // Append elements to form
  form.appendChild(label);
  form.appendChild(textInput);
  form.appendChild(submitInput);

  // Add event listener to the button
  submitInput.addEventListener("click", e => {
    e.preventDefault();
    removeEmployee(textInput.value);
    form.reset();
    textInput.focus();
  });

  return form;
};

export default generateRemoveEmployeeForm;
