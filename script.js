const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand')
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

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

function operate(operator, a, b) {}