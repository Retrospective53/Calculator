// Basic arithmetic functions
function add(number1, number2) {
    displayNumber = number1 + number2;
    display.textContent = Number(displayNumber);
    return number1 + number2;
}

function subtract(number1, number2) {
    displayNumber = number1 - number2;
    display.textContent = Number(displayNumber);
    return number1 - number2;
}

function multiply(number1, number2) {
    displayNumber = number1 * number2;
    display.textContent = Number(displayNumber);
    return number1 * number2;
}

function divide(number1, number2) {
    displayNumber = number1 / number2;
    display.textContent = Number(displayNumber);
    return number1 / number2;
}


// Operate between operator
function operate(operator, number1, number2) {
    if (operator == '+') {
        return add(number1, number2);
    }
    if (operator == '-') {
        return subtract(number1, number2);
    }
    if (operator == 'x') {
        return multiply(number1, number2);
    }
    if (operator == '/') {
        return divide(number1, number2);
    }
}

// Declare variable
const display = document.querySelector('.display');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btn0 = document.querySelector('.btn0');
const btnAdd = document.querySelector('.btnAdd');
const btnSubstract = document.querySelector('.btnSubstract');
const btnMultiply = document.querySelector('.btnMultiply');
const btnDivide = document.querySelector('.btnDivide');
const btnClear = document.querySelector('.btnClear');
const btnEqual = document.querySelector('.btnEqual');

let number1 = '';
let number2 = '';
let operator = '';
let displayNumber = '';

// store number function
function btnClickNumbers(btn) {
    if (number1 != '') {
        btn = this.textContent;
        displayNumber += btn;
        number2 = displayNumber;
        display.textContent = Number(displayNumber);
        return;
    }
    btn = this.textContent;
    displayNumber += btn;
    // Display number 
    display.textContent = Number(displayNumber);
}

// clear the display number
function Clear() {
    displayNumber = '';
    number1 = '';
    number2 = '';
    display.textContent = displayNumber;
}

// Button click run function number
btn1.addEventListener('click',btnClickNumbers);
btn2.addEventListener('click',btnClickNumbers);
btn3.addEventListener('click',btnClickNumbers);
btn4.addEventListener('click',btnClickNumbers);
btn5.addEventListener('click',btnClickNumbers);
btn6.addEventListener('click',btnClickNumbers);
btn7.addEventListener('click',btnClickNumbers);
btn8.addEventListener('click',btnClickNumbers);
btn9.addEventListener('click',btnClickNumbers);
btn0.addEventListener('click',btnClickNumbers);

btnClear.addEventListener('click', Clear);

// Button operator
function btnOperator (btn) {
    if (number1 != '') {
        number1 = displayNumber;
        displayNumber = '';
        btn = this.textContent;
        operator = btn;
        display.textContent = displayNumber;
        /* number2 = displayNumber;
        displayNumber = '';
        btn = this.textContent;
        operator = btn;
        display.textContent = displayNumber; */
        return;
    }
    number1 = displayNumber;
    displayNumber = '';
    btn = this.textContent;
    operator = btn;
    display.textContent = displayNumber;
}

btnAdd.addEventListener('click',btnOperator);
btnSubstract.addEventListener('click',btnOperator);
btnMultiply.addEventListener('click',btnOperator);
btnDivide.addEventListener('click',btnOperator);


function lol() {
    operate(operator, Number(number1), Number(number2));
}
// operate button
btnEqual.addEventListener('click', lol);