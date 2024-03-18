import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n");

let calc = await inquirer.prompt([
  {
    type: "list",
    name: "operation",
    message: "What operation you want to perform",
    choices: ["Add", "Sub", "Multiply", "Divide"],
  },
  {
    type: "number",
    name: "num1",
    message: "Enter first number",
  },
  {
    type: "number",
    name: "num2",
    message: "Enter second number",
  },
]);
if (calc.operation === "Add") {
  console.log(
    `The sum of ${calc.num1} and ${calc.num2} is = ${chalk.red.bold(
      calc.num1 + calc.num2
    )}`
  );
} else if (calc.operation === "Sub") {
  console.log(
    `The difference of ${calc.num1} and ${calc.num2} is = ${chalk.yellow.bold(
      calc.num1 - calc.num2
    )}`
  );
} else if (calc.operation === "Multiply") {
  console.log(
    `The product of ${calc.num1} and ${calc.num2} is = ${chalk.magenta(
      calc.num1 * calc.num2
    )}`
  );
} else {
  console.log(
    `The quotient of ${calc.num1} and ${calc.num2} is = ${chalk.green(
      calc.num1 / calc.num2
    )}`
  );
}
