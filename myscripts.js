let firstNumber;
let secondNumber;
let operator;
let currentNumber ="";
let displayValue = document.getElementById("currentNumber");
let runningDisplay = document.getElementById("runningDisplay");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculate = document.querySelector("#equals");


numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const numberValue = button.innerText;
    if (!isOperator(numberValue)) {
    currentNumber += value;
    updateDisplay(currentNumber);
    }
  });
});

function updateDisplay(value){
    displayValue.innerText = value;
}

function updateRunningCalculation(calc){
    runningDisplay.innerText = calc;
}
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}

function operate(num1,sign,num2){
    if (sign === '+'){
        add(num1, num2);
    }
    else if (sign === '-'){
        subtract(num1, num2);
    }
    else if (sign === '/'){
        divide(num1, num2);
    }
    else if (sign === '*'){
        multiply(num1, num2);
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