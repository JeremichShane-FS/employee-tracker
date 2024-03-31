import { createEl, getId } from "../utils/domHelpers.js";

const displayEmployeesFunction = employees => {
  const output = getId("output");
  output.innerHTML = "";

  const table = createEl("table");
  table.classList.add("styled-table");

  const headers = ["ID", "Name", "Age", "Salary", "Hours", "Pay", "FT/PT"];
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
      employee.age,
      employee.annualSalary,
      employee.hours,
      employee.payRate,
      employee.employeeType,
    ];
    const tr = createEl("tr");
    employeeInfo.forEach(info => {
      const td = createEl("td");
      td.textContent = info;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  output.appendChild(table);
};

export default displayEmployeesFunction;
