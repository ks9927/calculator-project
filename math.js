const add = (a, b) => a + b;

const subtract = (c, d) => c - d;

const multiply = (e, f) => e * f;

const divide = (g, h) => g / h;

//variables to update the display
let firstNum;
let operator;
let secondNum;

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