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
    currentNumber += numberValue;
    updateDisplay(currentNumber);
    }
  });
});

operatorButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        const operating = button.innerText;
        if(operating === "÷"){
            updateRunningCalculation("/", currentNumber)
        }
        if(operating === "x"){
            updateRunningCalculation("*", currentNumber)
        }
        else{
            updateRunningCalculation(operating, currentNumber)
        }
    });
});

calculate.addEventListener("click", () =>{
   const calculationArray = runningDisplay.split(" ");
   operate(calculationArray[0], calculationArray[1], calculationArray[2]);
});

function updateDisplay(value){
    displayValue.innerText = value;
}

function updateRunningCalculation(calc, typedNumber){
    runningDisplay += calc;
    typedNumber.innerText = runningDisplay;
}
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}

function operate(num1,sign,num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

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