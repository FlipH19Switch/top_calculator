let num1;
let num2;
let operator;
let numTemp = "";
const displayText = document.querySelector("#display-text");
const buttons = document.querySelectorAll("button");

function add() {
    return num1 + num2;
};

function subtract() {
    return num1 - num2;
};

function multiply() {
    return num1 * num2;
}

function divide() {
    return num1 / num2;
};

function operate() {
    if (operator === "+") return add();
    if (operator === "-") return subtract();
    if (operator === "x") return multiply();
    if (operator === "/") return divide();
    else return "";
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === "number") {
            
            if(button.textContent === ".") {
                if (numTemp === "") {numTemp = "0"};
                if (numTemp.includes(".")) {return};
            };

            numTemp += button.textContent;
            displayText.textContent = numTemp;
            return
        };
        
        if(button.id === "operator") {
            if(displayText.textContent === "") {return};
            
            if(num1 === undefined) {
                num1 = Number(numTemp);
                operator = button.textContent;
                numTemp = "";
                return
            };

            if (numTemp === "") {
                operator = button.textContent;
                return
            }
            
            num2 = Number(numTemp);
            num1 = operate();
            displayText.textContent = num1;
            operator = button.textContent;
            numTemp = "";
            return
        };

        if (button.id === "equals") {
            if (displayText.textContent === "") {return;}

            if (numTemp === "") {
                displayText.textContent = num1;
                return
            }
            
            num2 = Number(numTemp);
            num1 = operate();
            displayText.textContent = num1;
            numTemp = "";
            operator = undefined;
            return
        };
        
        if (button.id ==="clear") {
            if(displayText.textContent === "") {return;}

            numTemp = "";
            displayText.textContent = "";
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            return
        };
    });
});