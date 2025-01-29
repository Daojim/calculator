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

let firstNum = 0;
let secondNum = 0;
let operator;

const display = document.querySelector("#display");

const operand = document.querySelector(".operand");

operand.addEventListener("click", () => {
  console.log("You have pressed number" + operand.value);
});
