"use strict";

const calculatorResult = document.querySelector(".calculator__button-equal");
const calculatorClear = document.querySelector(".calculator__button-clear");

const calculatorOutput = document.querySelector("#result");
calculatorOutput.value = plus(2, 3);

function plus(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function minus(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

let operandOne = 4;
let operandTwo = 5;

function printResult() {
  calculatorOutput.value = plus(operandOne, operandTwo);
}

function clearField() {
  calculatorOutput.value = 0;
}

/* Bind events to click handlers */
calculatorResult.addEventListener("click", printResult);
calculatorClear.addEventListener("click", clearField);

/* Initial reset of field on load */
clearField();
