// RAYMOND NJAGALA

// factorial.js
function factorial(n) {
    if (n < 0) {
        return undefined;  // the factorial is not defined for negative values 
    }
    if (n === 0 || n === 1) {
        return 1;  // this is the base case: factorial of 0 and 1 is 1
    }
    return n * factorial(n - 1);  
}

module.exports = factorial;
