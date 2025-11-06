const readline = require("readline-sync");

let a = readline.questionInt("Enter a number(smaller of two): ");
let b = readline.questionInt("Enter the second number: ");
let operation = ["Add", "Subtract", "Multiply", "Divide"];
let idx = readline.keyInSelect(operation, "Choose operation: ");

switch (true) {
  case idx == 0:
    console.log(a + b);
    break;

  case idx == 1:
    console.log(b - a);
    break;

  case idx == 2:
    console.log(a * b);
    break;

  case idx == 3:
    console.log(b / a);
    break;
}
