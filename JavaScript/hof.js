/* function tenPercent(salary) {
  return salary * 0.1;
}

Array.prototype.calTax = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(callback(this[i]));
    }
    return res;
}

let salary = [1000, 2000, 3000, 4000, 5000];

console.log(salary.calTax(tenPercent)); */

function double(num) {
  return num * 2;
}

Array.prototype.customMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
};

let arr = [3, 6, 9, 12, 15, 18, 21];

const mapped = arr.customMap(double);
const filtered = mapped.filter((item) => item % 4 === 0);
const total = filtered.reduce((acc, num) => acc + num, 0);

console.log(total);
