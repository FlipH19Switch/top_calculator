let num1;
let num2;
let operator;
let numTemp = "";
const displayText = document.querySelector("#display-text");
const buttons = document.querySelectorAll("button");
let buttonID;
let buttonText;

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
    if (operator === "/") {
        if (num2 === 0) {
            alert("You can't divide by zero!")
            return
        }
        
        return divide();
    }
};

function trimDisplay() {
    String(displayText.textContent);
    if (displayText.textContent.length > 15) {displayText.textContent = displayText.textContent.slice(0,15)}
}
        
function calculator () {
        if(buttonID === "number") {
            if(buttonText === ".") {
                if (numTemp === "") {numTemp = "0"};
                if (numTemp.includes(".")) return;
            };

            numTemp += buttonText;
            displayText.textContent = numTemp;
            trimDisplay ();
            return
        };
        
        // BUG: backspace clears the screen when pressed directly after an operation is run or selected
        if(buttonID === "backspace") {
            numTemp = String(numTemp).slice(0,-1);
            displayText.textContent = numTemp;
            trimDisplay ();
            return
        }
        
        if(buttonID === "operator") {
            if(displayText.textContent === "") return;
            
            if(num1 === undefined) {
                num1 = Number(numTemp);
                operator = buttonText;
                numTemp = "";
                return
            };

            if (numTemp === "") {
                operator = buttonText;
                return
            }
            
            num2 = Number(numTemp);
            num1 = operate();
            displayText.textContent = num1;
            trimDisplay ();
            operator = buttonText;
            numTemp = "";
            return
        };

        if (buttonID === "equals") {
            if (displayText.textContent === "" || num1 === undefined) return;

            if (numTemp === "") {
                displayText.textContent = num1;
                trimDisplay ();
                return
            }
            
            num2 = Number(numTemp);
            num1 = operate();
            displayText.textContent = num1;
            trimDisplay ();
            numTemp = "";
            operator = undefined;
            return
        };
        
        if (buttonID ==="clear") {
            if(displayText.textContent === "") return;

            numTemp = "";
            displayText.textContent = "";
            trimDisplay ();
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            return
        };
    }

function logKey(e) {
    const keyPress = document.querySelector(`button[data-key="${e.code}"]`)
    if(!keyPress) return;
    buttonID = keyPress.id;
    buttonText = keyPress.textContent.trim();
    calculator ();
};

window.addEventListener('keydown', logKey);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonID = button.id;
        buttonText = button.textContent;
        calculator();
    })
});