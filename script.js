const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand')
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

let symbol = "*";
let a = 3;
let b = 3;

function add(a, b) {
    result = a + b;
    console.log(result)}

function subtract(a, b) {
    result = a - b;
    console.log(result)}

function multiply(a, b) {
    result = a * b;
    console.log(result)}

function divide(a, b) {
    result = a / b;
    console.log(result)
}

function operate(symbol, a, b) {
    if (symbol == "+") {
        add(a, b);
        return
    }
    else if (symbol == "-") {
        subtract(a, b)
        return
    }
    else if (symbol == "*") {
        multiply(a, b)
        return
}   else if (symbol == "÷") {
        divide(a, b)
        return
}
    else {
        return console.log("error");
    }
}
