"use strict";

const calculatorOutput = document.querySelector("#result");
calculatorOutput.value = plus();

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
