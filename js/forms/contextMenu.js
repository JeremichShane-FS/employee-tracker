import { createEl, getId } from "../utils/domHelpers.js";

const buildContextMenu = () => {
  const div = createEl("div", "context-menu");
  div.id = "context-menu";
  const ul = createEl("ul", "context-menu__list");
  const editLi = createEl("li", "context-menu__item--edit", "Edit");
  const removeLi = createEl("li", "context-menu__item--remove", "Remove");

  ul.appendChild(editLi);
  ul.appendChild(removeLi);
  div.appendChild(ul);

  // Initially hide the context menu
  div.style.display = "none";

  // Add the context menu to the DOM
  document.body.appendChild(div);

  // Return a promise that resolves after a delay to simulate asynchronous behavior
};

const hideMenu = () => {
  const contextMenu = getId("context-menu");
  if (contextMenu) {
    contextMenu.style.display = "none";
  }
};

export { buildContextMenu, hideMenu };
