let courses = [
  { title: "fullstackdevelopment", duration: "6months", price: 20000 },
  { title: "web design", duration: "3months", price: 12000 },
  { title: "ui/ux design", duration: "4months", price: 15000 },
];

let updatedcourse = courses.map((temp) => ({
  title: temp.title,
  duration: temp.duration,
  price: temp.price - (temp.price*0.2),
}));

console.log("updated course details :", updatedcourse);
