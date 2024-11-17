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

function mod(a, b) {
  return a % b;
}

let firstNumber = 0,
  operator = 0,
  secondNumber = 0;
const opac = 0.5;

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return (add(firstNumber, secondNumber) * 100).toFixed() / 100;
    case "-":
      return (subtract(firstNumber, secondNumber) * 100).toFixed() / 100;
    case "*":
      return (multipy(firstNumber, secondNumber) * 100).toFixed() / 100;
    case "/":
      return (divide(firstNumber, secondNumber) * 100).toFixed() / 100;
    case "%":
      return (mod(firstNumber, secondNumber) * 100).toFixed() / 100;
  }
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (
      display.textContent == "0" ||
      addition.style.opacity == opac ||
      subtraction.style.opacity == opac ||
      division.style.opacity == opac ||
      multiplication.style.opacity == opac ||
      remainder.style.opacity == opac
    ) {
      display.textContent = number.textContent;
      addition.style.opacity = 1;
      subtraction.style.opacity = 1;
      division.style.opacity = 1;
      multiplication.style.opacity = 1;
      remainder.style.opacity = 1;
    } else display.textContent += number.textContent;
  });
});

function clearDisplayContents() {
  firstNumber = 0;
  operator = 0;
  secondNumber = 0;
  addition.style.opacity = 1;
  subtraction.style.opacity = 1;
  division.style.opacity = 1;
  multiplication.style.opacity = 1;
  remainder.style.opacity = 1;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  clearDisplayContents();
});

let prevEvent;
function operatorEvent(target) {
  if (firstNumber != 0)
    display.textContent = operate(
      prevEvent.textContent,
      firstNumber,
      display.textContent,
    );
  firstNumber = display.textContent;
  operator = target.textContent;
  target.style.opacity = opac;
  prevEvent = target;
}

const addition = document.querySelector(".addition");
addition.addEventListener("click", () => operatorEvent(addition));
const subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => operatorEvent(subtraction));
const multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => operatorEvent(multiplication));
const division = document.querySelector(".division");
division.addEventListener("click", () => operatorEvent(division));
const remainder = document.querySelector(".remainder");
remainder.addEventListener("click", () => operatorEvent(remainder));

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (operator == 0) return;
  secondNumber = display.textContent;
  if (!isNaN(+firstNumber + +secondNumber))
    display.textContent = operate(operator, firstNumber, secondNumber);
  clearDisplayContents();
});

const del = document.querySelector(".delete");
del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});
