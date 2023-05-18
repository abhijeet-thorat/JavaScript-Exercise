let birthYear = 2000;
let futureYear = 2026;

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let possibleAge1 = futureYear - birthYear;
let possibleAge2 = possibleAge1 - 1;

console.log("If you were born in " + birthYear + ", then in " + futureYear + " you'll be " + possibleAge1 + " or " + possibleAge2 + " years old.");
