// jshint esversion: 6
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator__display");
const buttons = document.querySelector(".calculator__keys");

let displayNumber = "0";

buttons.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const button = e.target;

    const number = button.dataset.number;
    const action = button.dataset.action;

    if (number) {
      console.log("! number keypress");

      if (displayNumber === "0") {
        displayNumber = number;
      } else {
        displayNumber += number;
      }
    }

    if (action === "decimal") {
      if (!displayNumber.includes(".")) {
        displayNumber = displayNumber + ".";
      }
    }

    if (action === "add") {
      displayNumber += "+";
    } else if (action === "subtract") {
      displayNumber += "-";
    } else if (action === "multiply") {
      displayNumber += "*";
    } else if (action === "divide") {
      displayNumber += "/";
    }

    if (action === "calculate") {
      displayNumber = eval(displayNumber);
     }

    if (action === "clear") {
      displayNumber = "0";
    }
    display.textContent = displayNumber;
  }
});
