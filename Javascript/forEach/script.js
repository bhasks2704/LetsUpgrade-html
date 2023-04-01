// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

// ********************************************************************

const employees = [
  {
    id: 101,
    name: "Pradeep",
    position: "Jr. Developer",
    salary: 50000,
    skills: ["C", "C++", "Java", "Javascript"],
  },
  {
    id: 102,
    name: "Shivam",
    position: "Sr. Developer",
    salary: 80000,
    skills: ["React", "Vue.js", "Next.js", "Redux"],
  },
  {
    id: 103,
    name: "Sohan",
    position: "Sr. Manager",
    salary: 100000,
    skills: ["Leadership", "Communication", "Team managnent"],
  },
  {
    id: 104,
    name: "Jenny",
    position: "Designer",
    salary: 60000,
    skills: ["Graphic Designer", "UI/UX Designer", "Adobe Creative Suite"],
  },
];

employees.forEach(function (employee) {
  console.log(employee.name);
  console.log(employee.id);
  console.log(employee.skills[0]);
  console.log(employee.position);
  console.log("\n");
});
