const readline = require("readline-sync");

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = readline.keyInSelect(days, "Choose a day(1-7): ");

console.log("Selected Day: " + days[day]);
