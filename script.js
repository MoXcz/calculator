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

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.textContent == "0") display.textContent = number.textContent;
    else display.textContent += number.textContent;
  });
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

function displayOperator(symbol) {
  if (firstNumber != 0) secondNumber = display.textContent;
  if (secondNumber != 0) {
    display.textContent = operate(symbol, firstNumber, secondNumber);
    firstNumber = operate(symbol, firstNumber, secondNumber);
  } else {
    firstNumber = display.textContent;
    operator = symbol;
    display.textContent = symbol;
  }
}

addition.addEventListener("click", (event) => {
  displayOperator(event.target.textContent);
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  secondNumber = display.textContent;
  if (!isNaN(+firstNumber + +secondNumber))
    display.textContent = operate(operator, firstNumber, secondNumber);
});
