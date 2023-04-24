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


numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const numberValue = button.innerText;
    if (!isOperator(numberValue)) {
    currentNumber += numberValue;
    updateDisplay(currentNumber);
    }
  });
});

operatorButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        const operating = button.innerText;
        if(operating === "÷"){
            operator = "/"
        }
        else if(operating === "x"){
            operator = "*"
        }
        else{
            operator = operating
        }
        updateRunningCalculation(operator, currentNumber);
        currentNumber = "";
    });
});

calculate.addEventListener("click", () =>{
    calculateResult();
});

function calculateResult(){
    const calculationArray = runningCalculation.split(" ");
    firstNumber = calculationArray[0];
    operator = calculationArray[1];
    secondNumber = calculationArray[2];
    const result =operate(firstNumber, operator, secondNumber);
    updateDisplay(result);
    runningCalculation = "";
}

function updateDisplay(value){
    displayValue.innerText = value;
}

function updateRunningCalculation(calc, typedNumber){
    let operatorSymbol;

    switch (calc) {
      case "+":
        operatorSymbol = " + ";
        break;
      case "-":
        operatorSymbol = " - ";
        break;
      case "*":
        operatorSymbol = " × ";
        break;
      case "/":
        operatorSymbol = " ÷ ";
        break;
      default:
        operatorSymbol = "";
        break;
    }
    runningCalculation += typedNumber+ " " + operatorSymbol + " ";
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

function add(a, b){
    return a + b;
}

function mutiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a-b;
}


/* fix equals button
    add clear button functionality
    add delete button functionality
    integrate decimal point
*/