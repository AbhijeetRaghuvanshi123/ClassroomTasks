let obj = {
  fname: "abhijeet",
  lname: "baliyan",
  age: 22,
  address: {
    town: "meerut",
    state: "up"
  }
};

obj.fname = "undertaker";
//Object.seal(obj);
obj.lname = "Kane";
console.log(obj); 

let obj1 = JSON.parse(JSON.stringify(obj));
obj1.age = 2343;
obj1.address.town = "jarkhand";

console.log(obj);
console.log(obj1);
