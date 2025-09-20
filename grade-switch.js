let percent = 80;
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
switch (grade) {
  case "A":
    result = "you scord distinction ";
    break;
  case "b":
    result = "you scord first class ";
    break;
  case "C":
    result = "you scord second class ";
    break;
  case "d":
    result = "you failed";
    break;

  default:
    result = "invalid grade";
    break;
}

console.log("result: " + result);
