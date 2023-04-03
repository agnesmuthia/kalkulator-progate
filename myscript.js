const calculatorScreen = document.querySelector(".calculator-screen");

const updeteScreen = (number) =>{
calculatorScreen.value = number;
};

let prevNumber = '';
let currentNumber = '0';
let CalculationOperator = '';
const inputNumber = (number) =>{
    if (currentNumber === "0") {
        currentNumber = number;
    }else {
        currentNumber += number;
    }
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
       inputNumber(event.target.value);
        updateScreen(currentNumber); 
           });
});

const operators = document.querySelectorAll ("operator");


operators.forEach((operator) =>{
    operator.addEventListener('click', (event)=>{
        inputOperator(event.target.value);
        updateScreen(tampilan);
    })
});
const inputOperator = (operator) => {
    if(CalculationOperator === '') {
        prevNumber = currentNumber;
    }
    CalculationOperator = operator;
    currentNumber = '0';
    tampilan += ` ${operator} `;
};

const calculate = () => {
    let result = '';
    switch(CalculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber);
            break;
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber);
            break;
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber);
            break;
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    CalculationOperator = '';
};

const equalsign = document.querySelector('.equal-sign')
equalsign.addEventListener("click",() => {
    calculate();
    updetescreen(currentNumber);
});

//Ketika AC di klik


const clearAll = () => {
    prevNumber = '';
    currentNumber = '0';
    CalculationOperator = '';
   
};
conts clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener('click', () => {
    clearAll();
    calculatorScreen.value = currentNumber;
});

//Ketika decimal

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    };
    currentNumber += dot;
};
const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
//percen
percentage.addEventListener('click', () => {
    let result = ''
    result = parseFloat(currentNumber) * 10 /100;
    currentNumber = result;
    tampilan = `${prevNumber} ${CalculationOperator} ${result}`;
    updateScreen(tampilan);
    console.log(result);
});