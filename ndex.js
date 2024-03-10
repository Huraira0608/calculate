// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

// Main function
function main() {
    var userInput = prompt("Enter a number to calculate its factorial:");
    var number = parseInt(userInput);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    var result = factorial(number);
    console.log("Factorial of " + number + " is: " + result);
}

// Call the main function
main();