let rows = 50;

let stars = 1;
let space = rows - 1;
while (rows > 0) {
  //space
  for (let i = 0; i < space; i++) {
    process.stdout.write(" ");
  }

  //star
  for (let i = 0; i < stars; i++) {
    process.stdout.write("*");
  }

  //next line
  console.log();
  space--;
  stars += 2;
  rows--;
}
