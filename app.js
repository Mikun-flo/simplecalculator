// Get DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result-display");
const buttons = document.querySelectorAll(".operator-btn");

// Add click event listeners to all operator buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Collect input values and strip/remove empty spaces
    const val1 = num1Input.value.trim();
    const val2 = num2Input.value.trim();

    // Check if either input is empty
    if (val1 === "" || val2 === "") {
      resultDisplay.value = "Error: Please enter both numbers";
      return;
    }

    // Parse the values to floating-point numbers
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    // Check if parsing resulted in NaN 
    if (isNaN(n1) || isNaN(n2)) {
      resultDisplay.value = "Error: Invalid numeric input";
      return;
    }

    // Get the operator value from the custom data bank
    const operator = button.getAttribute("data-operator");
    let result;

    // Execute the corresponding arithmetric operation
    switch (operator) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        // Handle division by zero
        if (n2 === 0) {
          resultDisplay.value = "Error: Cannot divide by zero";
          return;
        }
        result = n1 / n2;
        break;
      default:
        resultDisplay.value = "Error: Unknown operation";
        return;
    }
    // Handle floating-point precision issues
    // If the number is a decimal, it will round it to 10 decimal places and remove excess zeros.
    if (!Number.isInteger(result)) {
      result = parseFloat(result.toFixed(10));
    }

    // Display the result
    resultDisplay.value = result;
  });
});