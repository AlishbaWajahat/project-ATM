#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 12345;
let answer = await inquirer.prompt({
    name: "Pin",
    message: "Enter your pin",
    type: "number",
});
if (answer.Pin === myPin) {
    console.log(`You entered correct pin`);
    let answer2 = await inquirer.prompt({
        message: "what do you want to do?",
        type: "list",
        name: "Options",
        choices: ["Withdraw money", "Check balance"],
    });
    if (answer2.Options === "Check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else {
        let answer3 = await inquirer.prompt({
            message: "How much money do you want to withdraw?",
            type: "list",
            name: "amount",
            choices: ["1000", "2000", "5000", "10000", "20000"]
        });
        if (answer3.amount > 10000) {
            console.log(`Insufficient balance`);
        }
        else {
            console.log(`Now your remaining balance is ${myBalance - answer3.amount}`);
        }
    }
}
else {
    console.log(`You entered incorrect pin`);
}
