/* const square = (n) => n * n;
console.log(square(6));

const isEven = (n) => n % 2 === 0;
console.log(isEven(10));

const max = (m, n) => (n > m ? n : m);
console.log(max(50, 10));

const fullname = (first, last) => `${first} ${last}`;
console.log(fullname("Abhijeet", "Raghuvanshi"));

const vowelcount = (str) =>
  str.split("").filter((ch) => "aeiou".includes(ch)).length;
console.log(vowelcount("abhijeetraghuvanshi"));

let nums = [1, 2, 3, 4, 5, 6];
nums = nums.map((n) => n * n);
console.log(nums);

const nums2 = [10, 20, 30];
const sum = nums2.reduce((a, b) => a + b);
console.log(sum);

const reverse = (str2) => str2.split("").reverse().join("");
console.log(reverse("Abhijeet Raghuvanshi"));

const user = (name1, age, standard) => ({name1, age, standard});
console.log(user("Abhijeet", 22, "B.Sc(cs)")); */

/* function greet(name, callback) {
  console.log("Hello... " + name);
  callback();
}

greet("Abhijeet", () => {
  console.log("Byee Byee..");
});

function result(ans) {
  console.log("Result is " + ans);
}

function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(10, 20, result);

function isEven(a, callback) {
  let result = a % 2 === 0 ? "Even" : "Odd";
  callback(result);
}

isEven(11, result);

function fetData(callback) {
  console.log("Featching data...");

  setTimeout(() => {
    callback("Data Loaded!");
  }, 2000);
}

fetData((msg) => {
  console.log(msg);
});
 */

//Sandwitch Task

/* function MakeSandwitch(callback) {
  console.log("Order in process...");

  setTimeout(() => callback(GetVegies), 1000);
}

function GetBread(callback) {
  console.log("Getting bread...");

  setTimeout(() => callback(ToastBread), 1000);
}

function GetVegies(callback) {
  console.log("Getting Onions, Cucumber, Potato....");

  setTimeout(() => callback(stackAll), 1000);
}

function ToastBread(callback) {
  console.log("Toasting Bread Slices....");

  setTimeout(() => callback(applyCream), 1000);
}

function stackAll(callback) {
  console.log("Stacking all on bread slice...");

  setTimeout(() => callback(finish), 1000);
}

function applyCream(callback) {
  console.log("Appling cream and sauce...");

  setTimeout(() => callback(), 1000);
}

function finish() {
  console.log("Here's your sandwitch...");
}

MakeSandwitch(GetBread); */

function takeBread(type, callback) {
  setTimeout(() => {
    console.log(`1️ Taking ${type} bread slices...`);
    callback();
  }, 1000);
}

function sliceVeggies(veggies, callback) {
  setTimeout(() => {
    console.log(`2️ Washing & slicing: ${veggies.join(", ")}...`);
    callback();
  }, 1000);
}

function toastBread(level, callback) {
  setTimeout(() => {
    console.log(`3️ Toasting bread to ${level} level...`);
    callback();
  }, 1000);
}

function spreadSauces(sauces, callback) {
  setTimeout(() => {
    console.log(`4️ Spreading sauces: ${sauces.join(", ")}...`);
    callback();
  }, 1000);
}

function addFillings(fillings, callback) {
  setTimeout(() => {
    console.log(`5️ Adding fillings: ${fillings.join(", ")}...`);
    callback();
  }, 1000);
}

function closeSandwich(callback) {
  setTimeout(() => {
    console.log("6️ Closing sandwich with top slice...");
    callback();
  }, 1000);
}

function grillSandwich(mode, callback) {
  setTimeout(() => {
    console.log(`7️ Grilling sandwich on ${mode} mode...`);
    callback();
  }, 1000);
}

function cutAndServe(style, callback) {
  setTimeout(() => {
    console.log(`8️ Cutting sandwich into ${style} pieces and serving...`);
    callback();
  }, 1000);
}


takeBread("Whole Wheat", () => {
  sliceVeggies(["Tomato", "Onion", "Cucumber"], () => {
    toastBread("Golden", () => {
      spreadSauces(["Mayo", "Mustard"], () => {
        addFillings(["Cheese", "Lettuce", "Veggies"], () => {
          closeSandwich(() => {
            grillSandwich("Medium Heat", () => {
              cutAndServe("Triangles", () => {
                console.log("Your sandwich is ready! Enjoy!");
              });
            });
          });
        });
      });
    });
  });
});

