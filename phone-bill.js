let calls = 150;
let bill = 0;
if (calls <= 100) {
  amount = calls * 1.5;
} else {
  bill = (calls - 100) * 1.5;
}
console.log("number of calls:", calls);
console.log("total bill:", bill + " Rs");
