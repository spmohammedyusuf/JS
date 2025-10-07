let employees = [
  { name: "mohammed", salary: 25000 },
  { name: "ahmed", salary: 28000 },
  { name: "yusuf", salary: 35000 },
];

let employeesupdated = employees.map((temp) => ({
  name: temp.name,
  salary: temp.salary + 2000,
}));

console.log("updatedsalary :", employeesupdated);
