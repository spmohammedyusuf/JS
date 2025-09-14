let calls = 550;
let bill = 0;
if (calls <= 100) {
  bill = 0;
} else {
  bill = (calls - 200) * 5;
}
console.log("number of calls:", calls);
console.log("total bill:", bill + " Rs");
