import displayForm from "./components/displayForm.js";
// Assignment: Employee Tracker

// Objective: Create a small employee tracker program that will utilize inheritance, modular design, and the use of data structures and more advanced array methods. This assignment uses ONLY prompts and Console.Log. NO CSS is required and NO HTML (except for loading the script tag)

//Initiate the app
class App {
  constructor() {
    this.employees = [];
  }

  run() {
    console.log("Welcome to the Employee Tracker");
    displayForm();
  }
}

(() => {
  const app = new App();
  app.run();
})();
