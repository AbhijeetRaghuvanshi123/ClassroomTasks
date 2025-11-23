import fs from "fs";

//write operation
fs.writeFileSync("demo.txt", "helloworld!");

//read operation
const data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);

//append operation
fs.appendFileSync("demo.txt", "\nHello world 2");
//deletion