const calculatorOutput = document.querySelector("#result");
calculatorOutput.value = 0;
const calculatorControls = document.querySelectorAll(
  ".calculator__input, .calculator__operator"
);

function calculate(number, operation) {
  console.log("Number: " + number);
  switch (operation) {
    case "number":
      console.log("Operation type: " + operation);
      operationNumber(number);
      break;
    case "plus":
      console.log("Operation type: " + operation);
      break;
    case "minus":
      console.log("Operation type: " + operation);
      break;
    case "divide":
      console.log("Operation type: " + operation);
      break;
    case "multiply":
      console.log("Operation type: " + operation);
      break;
    case "equal":
      console.log("Operation type: " + operation);
      break;
    case "clear":
      console.log("Operation type: " + operation);
      function operationClear() {
        calculatorOutput.value = 0;
      }
      break;
    case "allclear":
      console.log("Operation type: " + operation);
      operationAllClear();
      break;
  }
}

function operationNumber(calculatorControlNumber) {
  if (calculatorOutput.value == 0) {
    calculatorOutput.value = calculatorControlNumber;
  } else {
    calculatorOutput.value =
      "" + calculatorOutput.value + calculatorControlNumber;
  }
}

function operationAllClear() {
  calculatorOutput.value = 0;
}

function operationClear() {
  calculatorOutput.value = 0;
}

calculatorControls.forEach(control =>
  control.addEventListener("click", function() {
    let operation = control.dataset.type;
    let number;
    if (control.dataset.type == "number") {
      number = +control.innerHTML;
    }
    calculate(number, operation);
  })
);
