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
const opac = 0.5;

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
    if (display.textContent == "0" || addition.style.opacity == opac) {
      display.textContent = number.textContent;
      addition.style.opacity = 1;
    } else display.textContent += number.textContent;
  });
});

function clearDisplayContents() {
  firstNumber = 0;
  operator = 0;
  secondNumber = 0;
  addition.style.opacity = 1;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  clearDisplayContents();
});

function operatorEvent(target) {
  if (firstNumber != 0)
    display.textContent = operate("+", firstNumber, display.textContent);
  firstNumber = display.textContent;
  operator = target.textContent;
  target.style.opacity = opac;
}

const addition = document.querySelector(".addition");
addition.addEventListener("click", () => operatorEvent(addition));

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  secondNumber = display.textContent;
  if (!isNaN(+firstNumber + +secondNumber))
    display.textContent = operate(operator, firstNumber, secondNumber);
  clearDisplayContents();
});
