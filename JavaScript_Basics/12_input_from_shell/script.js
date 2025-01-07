import { read } from "fs";
import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readlineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            readline.close();
        });
    });
};

console.log("Enter your name and your age (separated by [,])");
let inputOfUser = await readlineAsync();
const [name, age] = inputOfUser.split(",");

console.log("Your name is => " + name + "\nYour age is => " + age);


