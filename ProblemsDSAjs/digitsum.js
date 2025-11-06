let n = 234;

let sum = 0;
while (n > 0) {
  sum = sum + (n % 10);

  n = (n / 10) | 0;
}

console.log(sum);
