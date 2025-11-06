const readline = require("readline-sync");

let a = readline.questionInt("Enter a side: ");
let b = readline.questionInt("Enter second side: ");
let c = readline.questionInt("Enter third side: ");

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) return true;
  return false;
}

function type(a, b, c) {
  if (a == b && b == c && c == a) return "Equiletral";
  if (a == b || b == c || c == a) return "Isosceles";
  return "Scalen";
}

if (isTriangle(a, b, c)) {
  console.log(type(a, b, c));
} else console.log("Not a Triangle!");
