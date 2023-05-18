// Part 1: Inputting names and greeting friends
let friend1 = prompt("Enter the name of friend 1:");
let friend2 = prompt("Enter the name of friend 2:");
let friend3 = prompt("Enter the name of friend 3:");

console.log("Welcome " + friend1 + ", " + friend2 + ", " + friend3 + "!");


// Part 2: Calculating age based on birth year
function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
}

// Example usage:
let birthYear = 1990;
let age = calculateAge(birthYear);

console.log("The age is: " + age);


// Part 3: Greeting friends with their ages
let name1 = "John";
let age1 = calculateAge(1990);

let name2 = "Alice";
let age2 = calculateAge(1995);

let name3 = "Mark";
let age3 = calculateAge(1985);

console.log("Welcome " + name1 + ", you are " + age1 + ".");
console.log("Welcome " + name2 + ", you are " + age2 + ".");
console.log("Welcome " + name3 + ", you are " + age3 + ".");
