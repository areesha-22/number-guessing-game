#! /usr/bin/env node
import inquire from "inquirer";
const randomnumber = Math.floor(Math.random() * 10);
const answer = await inquire.prompt([
    { message: "enter any number between 0-10", type: "number", name: "guessnumber" },
]);
if (answer.guessnumber === randomnumber) {
    console.log("congragulation ,you won the game");
}
else {
    console.log("opps! you lose the game");
}
