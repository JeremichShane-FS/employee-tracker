import { createEl } from "../utils/domHelpers.js";

// The generateRemoveEmployeeForm function returns a form with a text input field for the employee's name and a submit button.  When the submit button is clicked, the removeEmployee function is called.
const generateRemoveEmployeeForm = removeEmployee => {
  const form = createEl("form");
  form.id = "removeEmployeeForm";
  form.className = "hidden";

  // Create label and input for name
  const label = createEl("label");
  label.htmlFor = "name";
  label.textContent = "Name:";
  const textInput = createEl("input");
  textInput.type = "text";
  textInput.id = "name";
  textInput.name = "name";

  // Create submit input
  const submitInput = createEl("input");
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
    removeEmployee();
  });

  return form;
};

export default generateRemoveEmployeeForm;
