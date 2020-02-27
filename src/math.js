export function add(numberOne, numberTwo) {
  return +numberOne + +numberTwo;
}

export function subtract(numberOne, numberTwo) {
  return +numberOne - +numberTwo;
}

export function divide(numberOne, numberTwo) {
  return +numberOne / +numberTwo;
}

export function multiply(numberOne, numberTwo) {
  return +numberOne * +numberTwo;
}

export function calculateResult(numberOne, numberTwo, type) {
  switch (type) {
    case "plus":
      return add(numberOne, numberTwo);
    case "minus":
      return subtract(numberOne, numberTwo);
    case "divide":
      return divide(numberOne, numberTwo);
    case "multiply":
      return multiply(numberOne, numberTwo);
  }
}
