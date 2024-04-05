import { buildContextMenu } from "../forms/contextMenu.js";
import { createEl, getId, on } from "../utils/domHelpers.js";
import { attachRightClickHandler } from "../utils/rightClick.js";

const displayEmployeesFunction = (employees, appInstance) => {
  const output = getId("output");

  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }

  const table = createEl("table");
  table.classList.add("styled-table");
  table.id = "employeesTable";

  const headers = ["ID", "Name", "Salary", "Hours", "Pay", "FT/PT"];
  const thead = createEl("thead");
  const headerRow = createEl("tr");
  headers.forEach(header => {
    const th = createEl("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = createEl("tbody");
  employees.forEach((employee, index) => {
    const employeeInfo = [
      index + 1,
      employee.name
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" "),
      employee.annualSalary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      employee.hours,
      employee.payRate.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      employee.employeeType,
    ];
    const tr = createEl("tr");
    tr.id = `row-${employeeInfo[0]}`;
    tr.dataset.employeeId = index + 1;
    employeeInfo.forEach(info => {
      const td = createEl("td");
      td.textContent = info;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);

    // Attach context menu to row
    if (!tr.dataset.hasContextMenu) {
      window.onload = () => {
        attachRightClickHandler(tr.id, appInstance);
        tr.dataset.hasContextMenu = "true";
      };
    }
  });
  table.appendChild(tbody);

  output.appendChild(table);

  buildContextMenu();
};

export default displayEmployeesFunction;
