let firstNumber;
let secondNumber;
let operator;
let currentNumber ="";
let runningCalculation = "";
let displayValue = document.getElementById("currentNumber");
let runningDisplay = document.getElementById("runningDisplay");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculate = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");


numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const numberValue = button.innerText;
    if (!isOperator(numberValue)) {
        if (numberValue === "." && currentNumber.includes(".")) {
            return;
          }
          if (runningCalculation === "") {
            startNewCalculation(numberValue);
            return;
          }
    currentNumber += numberValue;
    updateDisplay(currentNumber);
    }
  });
});

operatorButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        const operator = button.innerText;
        addOperatorToCalculation(operator);
      });
    });

clearButton.addEventListener("click", () =>{
    clearAll();
});

deleteButton.addEventListener("click", () =>{
    deleteValue();
});

calculate.addEventListener("click", () =>{
    calculateResult();
});

function calculateResult() {
    runningCalculation += " " + currentNumber;
    runningDisplay.innerText += " " + currentNumber;
    try {
        console.log("runningCalculation: ", runningCalculation);
      let [firstNum, operator, secondNum] = runningCalculation.split(" ");
      console.log([firstNum, operator, secondNum]);
      if(operator === "x"){
        operator = "*"
      }
      else if(operator === "÷"){
        operator = "/"
      }
      const result = operate(parseFloat(firstNum), operator, parseFloat(secondNum));
      console.log(result);
      updateDisplay(result);
      currentNumber = result.toString();
      runningCalculation = "";
    } catch (error) {
      console.error(error);
    }
  }

function updateDisplay(value){
    displayValue.innerText = value;
}

function updateRunningCalculation(calc, typedNumber){
    let operatorSymbol;

    switch (calc) {
      case "+":
        operatorSymbol = "+";
        break;
      case "-":
        operatorSymbol = "-";
        break;
      case "*":
        operatorSymbol = "×";
        break;
      case "/":
        operatorSymbol = "÷";
        break;
      default:
        operatorSymbol = "";
        break;
    }
    runningCalculation += typedNumber+ " " + operatorSymbol;
    runningDisplay.innerText = runningCalculation;
}
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}   

function operate(num1,sign,num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (sign === '+'){
        return add(num1, num2);
    }
    else if (sign === '-'){
        return subtract(num1, num2);
    }
    else if (sign === '/'){
        return divide(num1, num2);
    }
    else if (sign === '*'){
        return multiply(num1, num2);
    }
}
function startNewCalculation(numberValue) {
    clearAll();
    currentNumber = numberValue;
    updateDisplay(currentNumber);
  }

function add(a, b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a-b;
}

function clearAll(){
    displayValue.innerText = "";
    runningDisplay.innerText = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    currentNumber = "";
    runningCalculation = "";
}

function deleteValue(){
    displayValue.innerText = String(displayValue.innerText).slice(0,-1);
}

function addOperatorToCalculation(operator) {
    if (runningCalculation === "") {
      runningCalculation = currentNumber + " " + operator;
    } else {
      runningCalculation += currentNumber + " " + operator;
      const [firstNum, op, secondNum] = runningCalculation.split(" ");
      const result = operate(parseFloat(firstNum), op, parseFloat(secondNum));
      updateDisplay(result);
      currentNumber = result.toString();
      runningCalculation = "";
    }
    runningDisplay.innerText = runningCalculation;
    currentNumber = "";
  }