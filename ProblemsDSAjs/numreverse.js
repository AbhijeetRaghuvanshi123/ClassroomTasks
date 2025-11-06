let n = 567;

let res = 0;
while( n > 0){
    res = res * 10;
    res = res + n%10;
    n = n/10 | 0;
}

console.log(res);