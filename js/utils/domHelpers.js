// domHelpers that are used in the app to create, query, and add event listeners to DOM elements
const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

const query = selector => document.querySelector(selector);

const getId = id => {
  const element = document.getElementById(id);
  element.on = (e, handler) => {
    if (e && handler) {
      element.addEventListener(e, handler);
    }
    return element;
  };
  return element;
};

const queryAll = selector => document.querySelectorAll(selector);

const on = (target, type, callback, capture) => {
  target.addEventListener(type, callback, !!capture);
};

const off = (target, type, callback, capture) => {
  target.removeEventListener(type, callback, !!capture);
};

export { createEl, getId, off, on, query, queryAll };
