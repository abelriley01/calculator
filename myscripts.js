let firstNumber;
let secondNumber;
let operator;
let currentNumber ="";
let runningCalculation = "";
let calculationHasRun = false;
let displayValue = document.getElementById("currentNumber");
let runningDisplay = document.getElementById("runningDisplay");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculate = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key >= 0 && key <= 9) {
    startNewCalculation(key);
  } else if (key === ".") {
    startNewCalculation(".");
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    addOperatorToCalculation(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteValue();
  } else if (key === "Escape") {
    clearAll();
  }
});

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const numberValue = button.innerText;
    if (!isOperator(numberValue)) {
        if (numberValue === "." && currentNumber.includes(".")) {
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

clearButton.addEventListener("click",clearAll);

deleteButton.addEventListener("click", deleteValue);

calculate.addEventListener("click", calculateResult);

function calculateResult() {
    runningCalculation += " " + currentNumber;
    runningDisplay.innerText += " " + currentNumber;
      let [firstNum, operator, secondNum] = runningCalculation.split(" ");
      ([firstNum, operator, secondNum]);
      if(firstNum === "" || operator === "" || secondNum === ""){
        updateDisplay("That didn't work")
      }
      if(operator === "x"){
        operator = "*"
      }
      else if(operator === "÷"){
        if (secondNum === "0"){
            updateDisplay("Don't get cute with me");
            return;
        }
        operator = "/"
      }
      const result = operate(parseFloat(firstNum), operator, parseFloat(secondNum));
      updateDisplay(parseFloat(result.toFixed(8)));
      currentNumber = result.toString();
      calculationHasRun = true;
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
    currentNumber += numberValue;
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
    calculationHasRun = false;
}

function deleteValue(){
  if(calculationHasRun){
    displayValue.innerText = "";
    currentNumber = "";
    runningCalculation = "";
    runningDisplay.innertext = "";
    calculationHasRun = false;
  }
  else{
    displayValue.innerText = String(displayValue.innerText).slice(0,-1);
    currentNumber = String(currentNumber).slice(0,-1);
  }
}

function addOperatorToCalculation(operator) {
    if (calculationHasRun){
    calculationHasRun = false;
    runningCalculation = currentNumber + " " + operator;
    runningDisplay.innerText = runningCalculation;
    }
    if (runningCalculation === "") {
      runningCalculation = currentNumber + " " + operator;
      currentNumber = "";
      displayValue.innerText = "";
      runningDisplay.innerText = runningCalculation;
    }
   else {
    const [firstNum, op, secondNum] = runningCalculation.split(" ");
    if (secondNum === undefined) {
      if (currentNumber.length !== 0){
        calculateResult();
        runningCalculation = currentNumber + " " + operator;
        runningDisplay.innerText = runningCalculation;
        currentNumber = "";
        displayValue.innerText = "";
        return;
      }
      runningCalculation = firstNum + " " + operator;
  }
    runningDisplay.innerText = runningCalculation;
  }
}