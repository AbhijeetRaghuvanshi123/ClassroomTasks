let letter = "A";

function check(letter) {
  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u" ||
    letter == "A" ||
    letter == "E" ||
    letter == "I" ||
    letter == "O" ||
    letter == "U"
  )
    return "vovel";
  return "consonant";
}

console.log(check(letter));
