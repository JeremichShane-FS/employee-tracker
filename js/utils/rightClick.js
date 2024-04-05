import removeEmployeeFunction from "../components/removeEmployee.js";

const attachRightClickHandler = (elementId, appInstance = null) => {
  const { employees, displayEmployees } = appInstance;
  const element = document.getElementById(elementId);

  if (element) {
    const handleContextMenu = e => {
      e.preventDefault();

      const menu = document.getElementById("context-menu");
      // If the right-clicked target is inside the table
      if (element.contains(e.target)) {
        // Set a data attribute on the context menu with the id of the selected row
        if (e.target.tagName === "TD") {
          menu.dataset.selectedRowId = e.target.parentNode.id;
        }

        menu.style.display = "block";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
      } else {
        // If the right-clicked target is outside the table, hide the context menu
        menu.style.display = "none";
      }
    };

    // Remove any existing "contextmenu" event listeners
    element.removeEventListener("contextmenu", handleContextMenu);
    element.addEventListener("contextmenu", handleContextMenu);

    // Add a click event listener to the document
    document.addEventListener("click", e => {
      const menu = document.getElementById("context-menu");
      if (menu && menu.style.display === "block" && !menu.contains(e.target)) {
        // Hide the context menu
        menu.style.display = "none";
      }
    });

    // Add click event listeners to the "Edit" and "Remove" options in the context menu
    const editOption = document.querySelector(".context-menu__item--edit");
    const removeOption = document.querySelector(".context-menu__item--remove");

    if (editOption && !editOption.dataset.hasClickEvent) {
      editOption.addEventListener("click", () => {
        const menu = document.getElementById("context-menu");
        if (menu) {
          const selectedRowId = menu.dataset.selectedRowId;
          // Get the selected row
          const selectedRow = document.getElementById(selectedRowId);

          // Get the employee name from the selected row
          const employeeName = selectedRow.cells[1].innerText;

          // Create a new event with the employee name as detail
          const event = new CustomEvent("editEmployee", {
            detail: { employeeName },
          });

          // Dispatch the event
          window.dispatchEvent(event);
        }
      });

      // Listen for the formAppended event
      window.addEventListener("formAppended", () => {
        const menu = document.getElementById("context-menu");
        if (menu) {
          menu.style.display = "none";
        }
      });

      editOption.dataset.hasClickEvent = "true";
    }

    if (removeOption && !removeOption.dataset.hasClickEvent) {
      removeOption.addEventListener("click", () => {
        const menu = document.getElementById("context-menu");
        if (menu) {
          const selectedRowId = menu.dataset.selectedRowId;
          // Parse the employee id from the selected row id
          const employeeId = parseInt(selectedRowId.replace("row-", ""), 10);

          const result = removeEmployeeFunction(
            employees,
            displayEmployees,
            employeeId
          );

          if (result) {
            menu.style.display = "none";
          }
        }
      });

      removeOption.dataset.hasClickEvent = "true";
    }
  } else {
    console.log(`Element with ID ${elementId} does not exist`);
    console.trace();
  }
};

export { attachRightClickHandler };
