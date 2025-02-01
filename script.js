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
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
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

function clearDisplay() {
  firstNum = null;
  secondNum = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
  displayNum = "0";
  updateDisplay();
}

function clgEverything() {
  console.log("firstNum is " + firstNum);
  console.log("secondNum is" + secondNum);
  console.log("firstOperator is " + firstOperator);
  console.log("secondOperator is " + secondOperator);
  console.log("result is " + result);
  console.log("displayNum is " + displayNum);
}

function minorReset() {
  displayNum = result;
  result = firstNum;
  secondOperator = null;
  secondNum = null;
  updateDisplay();
}

const operand = document.querySelectorAll(".operand").forEach((button) => {
  button.onclick = function () {
    if (displayNum === 0 || displayNum === "0" || displayNum === result) {
      displayNum = button.value;
      updateDisplay();
    } else if (displayNum !== 0) {
      displayNum += button.value;
      updateDisplay();
    }
  };
});

const operator = document.querySelectorAll(".operator").forEach((button) => {
  button.onclick = function () {
    if (firstNum === null) {
      if (button.value === "equals") {
        return;
      }
      firstNum = displayNum;
      firstOperator = button.value;
      alert(firstNum);
      alert(firstOperator);
      displayNum = "0";
    } else if (firstNum !== null && secondNum === null) {
      secondNum = displayNum;
      secondOperator = button.value;

      alert(secondNum);
      alert(secondOperator);
      if (secondOperator === "equals") {
        if (secondNum === "0" && firstOperator === "divide") {
          displayNum = "nice try KEKW";
          updateDisplay();
          return;
        }
        result = operate(
          firstOperator,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
        alert(result);
        minorReset();
      } else if (firstOperator === secondOperator) {
        result = operate(
          firstOperator,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
        minorReset();
      } else if (firstOperator !== secondOperator) {
        result = operate(
          firstOperator,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
        firstOperator = secondOperator;
        minorReset();
      }
    }
  };
});
