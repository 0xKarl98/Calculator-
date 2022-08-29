//@dev In the case of 3 * 5 = 15
//{3,5} denotes operand , * denotes operator , 15 denotes output

class Calculator {
  constructor(previousOperandEle, currentOperandEle) {
    this.previousOperandEle = previousOperandEle;
    this.currentOperandEle = currentOperandEle;
    //clear all the elements in set ;
    this.clear();
  }
  clear() {
    this.previousOperandEle = "";
    this.currentOperandEle = "";
    this.operation = undefined;
  }

  // convert the any object into a string , then slice it
  delete() {
    this.currentOperandEle = this.currentOperandEle.toString().slice(0, -1);
  }

  //if the number has already '.' in it , do nothing
  //else , append . with it

  appendNumber(number) {
    if (number === "." && this.currentOperandEle.includes(".")) return;
    this.currentOperandEle = this.currentOperandEle + number.toString();
  }

  OperationCompute(operation) {
    this.operation = operation;
    this.previousOperandEle = this.currentOperandEle;
    this.currentOperandEle = "";

    //no operand
    if (this.currentOperandEle === "") return;
    //if there is operand , compute it
    if (this.currentOperandEle !== "") {
      this.compute();
    }
  }

  //Exception : prev & current is not a number ;
  //2) user types more than one '.'
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperandEle);
    const current = parseFloat(this.currentOperandEle);

    if (isNaN(current) || isNaN(prev)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperandEle = computation;
    this.previousOperandEle = "";
    this.operation = undefined;
  }

  //number buttons
  numberButtons = document.querySelectorAll("[data-number]");
  operationButtons = document.querySelectorAll("[data-number]");
  equalButtons = document.querySelectorAll("[data-number]");
  deleteButtons = document.querySelectorAll("[data-number]");
  allClearButtons = document.querySelector("[data]");
  previousOperandEle = document.querySelector("[data-previous-operand]");
  currentOperandTextElement = document.querySelector("[data-current-operand]");

  calculator = new Calculator(previousOperandEle, currentOperandEle);

  // Use buttons to trigger those functions defined before
  // addEventListener : allClear , delete , equal
}
