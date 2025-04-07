// add one to money

function calculate() {
    // Get the current money value
    const moneyElement = document.getElementById("CurrentMoney");
    let currentMoney = parseInt(moneyElement.textContent.trim()); // Trim any extra spaces

    // Check if the value is a valid number
    if (isNaN(currentMoney)) {
        currentMoney = 0; // Default to 0 if parsing fails
    }

    // Increase the money value
    currentMoney += 1;

    // Update the displayed money value
    moneyElement.textContent = currentMoney;
}
