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
      if (secondOperator === "equals" || secondOperator === equals) {
        result = operate(
          firstOperator,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
        alert(result);
        displayNum = result;
        firstNum = result;
        updateDisplay();
      }
    }
  };
});
