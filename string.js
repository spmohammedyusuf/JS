let name = "    ahmed  ";
console.log(name);
console.log(name.length);

let trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());

console.log(trimmedName.indexOf("m"));

let courseTitle = "Full stack development using React";
let newCoursetitle = courseTitle.replace("React", "");

console.log(newCoursetitle);

let position = courseTitle.indexOf("React");
console.log(position);

let coursePart = courseTitle.substring(25, 29);
console.log(coursePart);

console.log(courseTitle.charAt(25));

let firstname = "mohammed";
let lastname = "yusuf";
let fullName = firstname.concat(" ", lastname);
console.log(fullName);

let topics = "javascript, python, reactjs";
let topicsarray = topics.split(",");
console.log(topicsarray);

let course2 = "backend with dev ";
console.log(course2);
