import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.95,
    INR: 83.61,
    OR: 0.33,
    EGP: 47.44,
    EUR: 0.94,
    QTR: 3.64,
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "OR", "EGP", "EUR", "QTR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "OR", "EGP", "EUR", "QTR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmoount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount1 = userAns.amount;
let baseAmount = amount1 / fromAmoount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
