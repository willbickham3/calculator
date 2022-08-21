const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand')
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');

let symbol;
let a;
let b;

function add(a, b) {
    result = parseFloat(a + b)
    currentOperand.textContent = result
}

function subtract(a, b) {
    result = parseFloat(a - b);
    currentOperand.textContent = result
}

function multiply(a, b) {
    result = parseFloat(a * b);
    currentOperand.textContent = result
}

function divide(a, b) {
    result = parseFloat(a / b);
    currentOperand.textContent = result
}


function clearDisplay() {
    previousOperand.innerText = "";
    currentOperand.innerText = "";
    symbol = "";
    result = undefined;
    return
}

function deleteNum() {
    currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1)
    a = Number(currentOperand.textContent);
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
        if (b === 0) {
            currentOperand.innerText = "I don't think so!"
        }
        else {
        divide(a, b)
        return}
}
    else {
        return console.log("error");
    }
}


// event listeners for buttons
operand.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '.' && currentOperand.textContent.includes('.')) return
        if (previousOperand.textContent == "") {
        currentOperand.textContent += button.textContent;
        a = Number(currentOperand.textContent);
    }
        else {
            currentOperand.textContent += button.textContent;
            b = Number(currentOperand.textContent)
        }
    })
})
operator.forEach(button => {
    button.addEventListener('click', () => {
        if (previousOperand.textContent !== '') {
            operate(symbol, a, b)
            a = result;
        }
        symbol = button.textContent;
        previousOperand.textContent = `${Number(a)} ${symbol}`;
        currentOperand.textContent = ''; 
} )})

clearBtn.addEventListener('click', clearDisplay)
equalsBtn.addEventListener('click', function() {
    operate(symbol, a, b);
    previousOperand.textContent += ` ${Number(b)}`;
    a = result;
    b = '';
})

deleteBtn.addEventListener('click', deleteNum)