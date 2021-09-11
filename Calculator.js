// Requrement / Module
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Process
function calc(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
  }
}

// Input
rl.question("Enter your first number:", (a) => {
  rl.question("Enter your second number:", (b) => {
    rl.question("Enter your Operator:", (op) => {
      let result = calc(parseFloat(a), parseFloat(b), op);
      // Output
      console.log(result);
      rl.close;
    });
  });
});
