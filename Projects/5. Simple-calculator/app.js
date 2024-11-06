// Function to add two numbers
function add(num1, num2) {
    return +num1 + +num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return +num1 - +num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return +num1 / +num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return +num1 * +num2;
}

// Function to perform the calculation based on the selected operator
function calculate(num1, num2, operator) {
    switch (operator) {
        case "plus":
            return add(num1, num2);
        case "min":
            return subtract(num1, num2);
        case "dev":
            return divide(num1, num2);
        case "multi":
            return multiply(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Function to update the result in the DOM
function updateResult() {
    const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;
    const operator = document.getElementById("selectOp").value;
    const result = calculate(num1, num2, operator);
    document.querySelector(".result").innerHTML = result;
}

// Event listener for button click
document.getElementById("btn").addEventListener("click", updateResult);
