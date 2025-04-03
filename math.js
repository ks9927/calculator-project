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


const displayText = document.querySelector('.display-text');
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".equals-btn");

//variables to update the display
let firstNum = '';
let operator = '';
let secondNum = '';

//function to display numbers and operators
function displayContent() {
    numberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
           
                firstNum = btn.textContent;
                displayText.textContent += firstNum;
                console.log("1st Num:" + firstNum);
            
                
        });
    });

    operatorBtns.forEach(button => {
        button.addEventListener('click', () => {
                operator = button.textContent;
                displayText.textContent += operator;
              
        });
    });

    equalBtn.addEventListener('click', () => {
        equalSign = equalBtn.textContent;
        displayText.textContent += equalSign;
    });   
};






displayContent();

