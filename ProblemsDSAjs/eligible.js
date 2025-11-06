const readline = require("readline-sync");

let age = readline.questionInt("Enter Your Age: ");

if (age >= 18) console.log("Eligible!");
else console.log("Not Eligible!");
