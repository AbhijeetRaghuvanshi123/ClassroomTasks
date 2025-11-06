let n = 243546;

let digits = 0;
while(n > 0){
    digits++;
    n = n / 10 | 0;
}

console.log(digits);