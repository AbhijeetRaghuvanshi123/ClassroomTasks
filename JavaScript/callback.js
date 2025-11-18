function sayHi(name , a) {
  console.log(`Hi good morning ${name}`);
  a();
}

function sayBye() {
  console.log(`Bye Bye`);
}

sayHi("Abhijeet", sayBye);
