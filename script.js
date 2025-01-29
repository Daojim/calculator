function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayNum = "0";

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayNum;
}

updateDisplay();

const operand = document.querySelectorAll(".operand").forEach((button) => {
  button.onclick = function () {
    displayNum += button.value;
    updateDisplay();
  };
});
