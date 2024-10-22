// factorial.js
function factorial(n) {
    if (n < 0) {
        return undefined;  // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1;  // Base case: factorial of 0 and 1 is 1
    }
    return n * factorial(n - 1);  // Recursive case
}

module.exports = factorial;
