let displayValue = "0";
let currentOperator = null;
let resetDisplayOnNextInput = false;

function updateDisplay() {
    document.getElementById("expression").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    currentOperator = null;
    resetDisplayOnNextInput = false;
    document.getElementById("result").textContent = "";
    updateDisplay();
}

function deleteDigit() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

function appendNumber(number) {
    if (resetDisplayOnNextInput) {
        displayValue = number.toString();
        resetDisplayOnNextInput = false;
    } else {
        if (displayValue === "0") {
            displayValue = number.toString();
        } else {
            displayValue += number.toString();
        }
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (resetDisplayOnNextInput) {
        resetDisplayOnNextInput = false;
        const lastChar = displayValue.slice(-1);
        if ("+-*/".includes(lastChar)) {
            displayValue = displayValue.slice(0, -1);
        }
    }
    displayValue += operator;
    resetDisplayOnNextInput = false;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue.replace(/x/g, '*'));
        document.getElementById("result").textContent = result;
        document.getElementById("result").style.fontSize = "36px";
    } catch (e) {
        document.getElementById("result").textContent = "Error";
    }
    resetDisplayOnNextInput = true;
    updateDisplay();
}

function calculatePercentage() {
    try {
        const result = eval(displayValue.replace(/x/g, '*')) / 100;
        displayValue = result.toString();
        document.getElementById("result").textContent = result;
        document.getElementById("result").style.fontSize = "36px";
    } catch (e) {
        document.getElementById("result").textContent = "Error";
    }
    resetDisplayOnNextInput = true;
    updateDisplay();
}

updateDisplay();
