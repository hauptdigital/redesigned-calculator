import { calculateResult } from "./math.js";

/* Define calculator buttons */
const calculatorCalculateResult = document.querySelector(
  ".calculator__button-equal"
);
const calculatorClear = document.querySelector(".calculator__button-clear");
const calculatorOutput = document.querySelector("#result");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

/* Set initial values */
let numberOne = 0;
let numberTwo = 0;
let type = "";

function clearField() {
  calculatorOutput.value = 0;
}

function resetCalculation() {
  numberOne = 0;
  numberTwo = 0;
  type = "";
  calculatorOutput.value = 0;
  log(type);
}

/* log */

function log(type) {
  console.log("Type: " + type);
  console.log("numberOne: " + numberOne);
  console.log("numberTwo: " + numberTwo);
  console.log("calculatorOutput.value: " + calculatorOutput.value);
}

/* Bind events to inputs */

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    if (calculatorOutput.value == 0) {
      calculatorOutput.value = calculatorInput.innerText;
    } else {
      calculatorOutput.value =
        "" + calculatorOutput.value + calculatorInput.innerText;
    }
    log(calculatorInput.dataset.type);
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener);

/* Bind events to operators*/

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    /* save old number and operation type */
    numberOne = calculatorOutput.value;
    numberTwo = 0;
    type = calculatorOperator.dataset.type;
    clearField();
    log(calculatorOperator.dataset.type);
  }

  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}

calculatorOperators.forEach(addOperatorEventListener);

/* Bind event to equal button */

function handleResultClick() {
  numberTwo = calculatorOutput.value;
  calculatorOutput.value = calculateResult(numberOne, numberTwo, type);
  log(type);
}

calculatorCalculateResult.addEventListener("click", handleResultClick);

/* Bind event to clear button */

calculatorClear.addEventListener("click", resetCalculation);

/* Initial reset of field on load */
clearField();
