let course = ["java", "python", "c++"];

course[2] = "golang";
course.push("mongodb");
course.push("chatgpt & ai tools");

console.log(course);

let lastcourse = course.pop();
console.log(lastcourse);

let coursecount = course.length;
console.log(coursecount);

let j;
console.log("**** list of course ****");
for (let i = 0; i < course.length; i++) {
  j = i + 1;
  console.log("course #" + j + "->" + course[i]);
}
