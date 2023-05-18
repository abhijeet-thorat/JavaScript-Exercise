// Task 1: Repeatedly print xValue decreasing by 0.5
let xValue = 5;
while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

// Task 2: Print all odd numbers between 1 - 100
let number = 1;
while (number <= 100) {
  console.log(number);
  number += 2;
}

// Task 3: Print 1 through n in square brackets
function printNumbersInSquareBrackets(n) {
  let i = 1;
  while (i <= n) {
    console.log("[" + i + "]");
    i++;
  }
}

printNumbersInSquareBrackets(6);

// Task 4: Compute the sum of first n positive integers
function computeSumOfPositiveIntegers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(computeSumOfPositiveIntegers(5));
console.log(computeSumOfPositiveIntegers(19));
