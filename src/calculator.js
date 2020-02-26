function calculate(number, operation) {
  console.log("Number: " + number);
  switch (operation) {
    case "number":
      console.log("Operation type: " + operation);
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
    case "plus":
      console.log("Operation type: " + operation);
      break;
    case "equal":
      console.log("Operation type: " + operation);
      break;
    case "clear":
      console.log("Operation type: " + operation);
      break;
    case "allclear":
      console.log("Operation type: " + operation);
      break;
  }
}

let calculatorControls = document.querySelectorAll(
  ".calculator__input, .calculator__operator"
);

calculatorControls.forEach(control =>
  control.addEventListener("click", function() {
    let operation = control.dataset.type;
    let number;
    if (control.dataset.type == "number") {
      number = Number(control.innerHTML);
    }
    calculate(number, operation);
  })
);
