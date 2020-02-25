function calculate(number, operation) {
  switch (operation) {
    case "number":
      console.log("number");
      break;
    case "plus":
      console.log("plus");
      break;
    case "minus":
      console.log("minus");
      break;
    case "plus":
      console.log("plus");
      break;
    case "divide":
      console.log("divide");
      break;
    case "multiply":
      console.log("multiply");
      break;
    case "plus":
      console.log("plus");
      break;
    case "equal":
      console.log("equal");
      break;
    case "clear":
      console.log("clear");
      break;
    case "allclear":
      console.log("allclear");
      break;
  }
}

let calculatorControls = document.querySelectorAll(
  ".calculator__input, .calculator__operator"
);

calculatorControls.forEach(control =>
  control.addEventListener("click", function() {
    let operation = control.dataset.type;
    let number = "";
    if (control.dataset.type == "number") {
      number = parseInt(control.innerHTML);
    }
    calculate(number, operation);
  })
);
