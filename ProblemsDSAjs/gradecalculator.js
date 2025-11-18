const readline = require("readline-sync");
let marks = readline.questionInt("Enter Your marks: ");

switch (true){
  case marks > 100 || marks < 0:
    console.log("Enter Valid Marks(0-100): ");
    break;

  case marks > 89:
    console.log("A");
    break;

  case marks > 79:
    console.log("B");
    break;

  case marks > 69:
    console.log("C");
    break;

  case marks > 59:
    console.log("D");
    break;

  case marks < 60:
    console.log("F");
    break;
}
