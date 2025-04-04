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
           if(!operator) {
            firstNum += btn.textContent;
            displayText.textContent = firstNum;
            console.log("1st Num:" + firstNum);
           }
           else {
            secondNum += btn.textContent;
            displayText.textContent = firstNum + operator + secondNum;
            console.log("2nd Num: " + secondNum);
           }
                
        });
    });

    operatorBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (!operator && firstNum) {
                // Set the operator only if firstNum exists
                operator = button.textContent;
                displayText.textContent = firstNum + operator;
                console.log("Operator: " + operator);
            }
        });
    });
    
    equalBtn.addEventListener('click', () => {

        if (firstNum && operator && secondNum) {
           
            equalSign = equalBtn.textContent;
            // Perform the calculation
            const result = operate(parseFloat(firstNum), operator, parseFloat(secondNum));
            displayText.textContent = firstNum + operator + secondNum+ equalSign + result;

            // Reset variables for the next calculation
            firstNum = result.toString();
            operator = '';
            secondNum = '';
            console.log("Result: " + result);
            
        }
    });   
};

const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".delete-btn");

clearBtn.addEventListener("click", () => {
    displayText.textContent = "";
    firstNum = '';
    secondNum = '';
    operator = '';
})




displayContent();

