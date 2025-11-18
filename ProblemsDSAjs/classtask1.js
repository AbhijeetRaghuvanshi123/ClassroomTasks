let numbers = [5, 2, 3489, 329, 4323];

function isPrime(n) {
  if (n == 1) return false;
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i + 5) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

numbers.forEach((element) => {
  console.log(isPrime(element));
});
