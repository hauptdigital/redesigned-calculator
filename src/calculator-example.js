"use strict";

/* Define calculator buttons */
const calculatorResult = document.querySelector(".calculator__button-equal");
const calculatorClear = document.querySelector(".calculator__button-clear");
const calculatorOutput = document.querySelector("#result");
const calculatorInputs = document.querySelectorAll(".calculator__input");

/* Just test values */
let numberOne = 4;
let numberTwo = 5;

/* Calculator functions */

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

function printResult() {
  calculatorOutput.value = plus(operandOne, operandTwo);
}

function clearField() {
  calculatorOutput.value = 0;
}

/* log */

function log(type) {
  console.log("Type: " + type);
  console.log("numberOne: " + numberOne);
  console.log("numberTwo: " + numberTwo);
  console.log("calculatorOutput.value: " + calculatorOutput.value);
}

/** Bind events to click handlers **/

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    if (calculatorOutput.value == 0) {
      calculatorOutput.value = calculatorInput.innerText;
    } else {
      calculatorOutput.value += calculatorInput.innerText;
    }
    log(calculatorInput.dataset.type);
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

calculatorResult.addEventListener("click", printResult);
calculatorClear.addEventListener("click", clearField);

/* Initial reset of field on load */
clearField();
