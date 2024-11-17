function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multipy(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber = 0,
  operator,
  secondNumber;

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multipy(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (event) => {
  let target = event.target;
  let hasNumber = /\d/;
  if (display.textContent == "0" && !hasNumber.test(target.textContent)) return;
  else if (display.textContent == "0" && hasNumber.test(target.textContent))
    display.textContent = target.textContent;
  else if (target.childNodes.length === 1 && hasNumber.test(target.textContent))
    display.textContent += target.textContent;
  firstNumber = display.textContent;
});
