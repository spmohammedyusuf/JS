let percent =79.9;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "D";
}
console.log("percent = " + percent);
console.log("grade = " + grade);

let result = "";
if (grade == "A") {
  result = "you scored distinction";
} else if (grade == "B") {
  result = "you scored first class";
} else if (grade == "C") {
  result = "you scored second class";
} else if (grade == "D") {
  result = "you failed ";
}

console.log("result =" + result);
