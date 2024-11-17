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
  secondNumber = 0;

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
  if (
    target.childNodes.length === 1 &&
    display.textContent == "0" &&
    !hasNumber.test(target.textContent)
  )
    return;
  else if (
    target.childNodes.length === 1 &&
    display.textContent == "0" &&
    hasNumber.test(target.textContent)
  )
    display.textContent = target.textContent;
  else if (target.childNodes.length === 1 && hasNumber.test(target.textContent))
    display.textContent += target.textContent;
});

const clear = document.querySelector(".clear");
function clearDisplayContents() {
  display.textContent = "0";
  firstNumber = 0;
  operator = 0;
  secondNumber = 0;
}

clear.addEventListener("click", clearDisplayContents);

const addition = document.querySelector(".addition");

addition.addEventListener("click", () => {
  if (secondNumber != 0) {
    display.textContent = operate("+", firstNumber, secondNumber);
    return;
  }
  firstNumber = display.textContent;
  operator = "+";
  display.textContent = "+";
});
