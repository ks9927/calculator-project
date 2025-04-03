const add = (a, b) => a + b;

const subtract = (c, d) => c - d;

const multiply = (e, f) => e * f;

const divide = (g, h) => g / h;

//operate function
function operate(num1, oper, num2) {
if (oper === '+') {
    return add(num1, num2);
}
else if (oper === '-') {
    return subtract(num1, num2);
}
else if (oper === '*') {
    return multiply(num1, num2);
}
else if (oper === '/') {
    return divide(num1, num2);
}
}

//variables to update the display
let firstNum;
let operator;
let secondNum;

const displayText = document.querySelector('.display-text');
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
function displayContent() {
    numberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let displayValue = btn.textContent;
            displayText.textContent += displayValue;
        });
    });

    operatorBtns.forEach(button => {
        button.addEventListener('click', () => {
            let operatorText = button.textContent;
            displayText.textContent += operatorText;
        });
    })
};

displayContent();