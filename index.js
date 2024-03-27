#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
async function startATMConservation() {
    console.log(chalk.greenBright.bold("Welcome to UBL Bank!"));
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userID",
            message: "Kindly Enter your user ID:"
        },
        {
            type: "number",
            name: "userPIN",
            message: "Kindly Enter your user PIN:"
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Please Select you Account Type:"
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fastcash withdrawl", "Normal withdrawl"],
            message: "Please Select your transaction Type:",
            when(answers) {
                return answers.accountType;
            }
        },
        {
            type: "list",
            name: "amount",
            choices: ["10000", "20000", "30000", "40000", "50000"],
            message: "Please Select your Amount:",
            when(answers) {
                return answers.transactionType === "Fastcash withdrawl";
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter Your Amount:",
            when(answers) {
                return answers.transactionType === "Normal withdrawl";
            }
        },
    ]);
    if (answers.userID && answers.userPIN) {
        console.log("Processing Your request...");
        const balance = Math.floor(Math.random() * 100000000);
        console.log(chalk.greenBright("Your current balance is: PKR", balance.toLocaleString()));
        const enterAmount = answers.amount;
        if (balance >= enterAmount) {
            const remainingBalance = balance - enterAmount;
            console.log(chalk.greenBright("Transaction is Successful.your remaining balance is: PKR", remainingBalance.toLocaleString()));
        }
        else {
            console.log(chalk.red("Insufficient balance.Please try again with a lower amount."));
        }
    }
}
startATMConservation();
