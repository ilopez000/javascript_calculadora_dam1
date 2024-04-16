let currentRes = 0;
let displayValue = '';

function addNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function add() {
    currentRes += Number(displayValue);
    displayValue = '';
    document.getElementById('display').value = currentRes;
}

function calculate() {
    currentRes += Number(displayValue);
    document.getElementById('display').value = currentRes;
    currentRes = 0;
    displayValue = '';
}

function reset() {
    currentRes = 0;
    displayValue = '';
    document.getElementById('display').value = '';
}
