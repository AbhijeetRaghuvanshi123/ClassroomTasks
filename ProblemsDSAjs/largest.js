let first = 20;
let second = 100;
let third = 15;

function largest(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

console.log(largest(first, second, third));
