let n = 10;

let a = 0;
let b = 1;
for (let i = 0; i < n; i++) {
  b = a + b;
  a = b - a;
}

console.log(a);
