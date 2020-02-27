import { calculatorLog } from "./calculator-example.js";

export function addLogEntry(numberOne, numberTwo, type, result) {
  let operator = "";
  switch (type) {
    case "plus":
      operator = "+";
      break;
    case "minus":
      operator = "-";
      break;
    case "divide":
      operator = "/";
      break;
    case "multiply":
      operator = "*";
      break;
  }

  let newLogEntry = document.createElement("div");
  newLogEntry.className = "log__entry";
  let newLogEntryContent = document.createTextNode(
    numberOne + " " + operator + " " + numberTwo + " = " + result
  );
  newLogEntry.appendChild(newLogEntryContent);
  calculatorLog.insertBefore(newLogEntry, null);
}
