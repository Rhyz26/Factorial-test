// RAYMOND NJAGALA

// test/factorial.test.js
const { expect } = require("chai");
const factorial = require("../factorial"); // We are bringing in the factorial function

describe("Factorial Function Tests", () => {
  // for factorial of 0
  it("should return 1 when the input is 0", () => {
    expect(factorial(0)).to.equal(1);
  });

  // for factorial of 1
  it("should return 1 when the input is 1", () => {
    expect(factorial(1)).to.equal(1);
  });

  // for factorial of 2
  it("should return 2 when the input is 2", () => {
    expect(factorial(2)).to.equal(2);
  });

  // for factorial of 3
  it("should return 6 when the input is 3", () => {
    expect(factorial(3)).to.equal(6);
  });

  // for factorial of 4
  it("should return 24 when the input is 4", () => {
    expect(factorial(4)).to.equal(24);
  });

  // for factorial of 5
  it("should return 120 when the input is 5", () => {
    expect(factorial(5)).to.equal(120);
  });

  // for factorial of 6
  it("should return 720 when the input is 6", () => {
    expect(factorial(6)).to.equal(720);
  });

  // for factorial of 7
  it("should return 5040 when the input is 7", () => {
    expect(factorial(7)).to.equal(5040);
  });

  // for factorial of negatives
  it("should return undefined when the input is negative", () => {
    expect(factorial(-1)).to.equal(undefined);
  });
});
