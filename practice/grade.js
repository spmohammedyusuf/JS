let percent = 90;
let grade = "";

if (percent >= 80 ){
    grade = "a";
} else if (percent >= 60){
    grade = "b";
} else if (percent >= 50){
    grade = "c";
} else {
    grade = "d";
} 
console.log("percent = " + percent);
console.log(" grade = " + grade);

let result;

if(grade == "a"){
result = "you scored destination";
} else if (grade == "b"){
    result = "you scored first class";
} else if (grade == "c"){
    result = "you scored second class";
} else if(grade == "d"){
   result = "invalid"; 
} 

console.log("result = " + result);
