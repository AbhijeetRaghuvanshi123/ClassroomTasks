let year = 2000;

function leapyear(year) {
  if (year % 4 != 0) return false;
  if (year % 100 == 0 && year % 400 != 0) return false;
  return true;
}

console.log(leapyear(year));
