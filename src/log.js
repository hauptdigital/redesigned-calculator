const calculatorLog = document.querySelector(".log");

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

  let LogEntry = document.createElement("div");
  LogEntry.className = "log__entry";

  let LogEntryContent = document.createTextNode(
    numberOne + " " + operator + " " + numberTwo + " = " + result
  );

  LogEntry.appendChild(LogEntryContent);
  calculatorLog.insertBefore(LogEntry, null);
}
