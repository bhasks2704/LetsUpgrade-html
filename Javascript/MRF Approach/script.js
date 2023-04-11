let employees = [
  {
    id: 101,
    name: "Pardeep",
    designation: "Junior Developer",
    yearsOfExp: 2,
    salary: 30000,
  },
  {
    id: 102,
    name: "Abhishek",
    designation: "Senior Developer",
    yearsOfExp: 5,
    salary: 80000,
  },
  {
    id: 103,
    name: "Suman",
    designation: "Businness Manager",
    yearsOfExp: 12,
    salary: 100000,
  },
  {
    id: 104,
    name: "Jenny",
    designation: "Sr. Administrator",
    yearsOfExp: 7,
    salary: 50000,
  },
  {
    id: 105,
    name: "Abhijeet",
    designation: "React Developer",
    yearsOfExp: 4,
    salary: 70000,
  },
];

//for each
//create an empty array
// let employeename=[];
// employees.forEach((emp)=>{
//    employeename.push(emp.name);
// })

// console.log(employeename);

//lets do the same thing with map functions
// let employeename=employees.map((emp)=>{
//    return emp.name;
// })
// let empdesignation=employees.map(emp=>emp.designation);

// console.log(employeename);
// console.log(empdesignation);

//get the salary of all employees
// let totalSalary=employees.reduce((prev,curr)=>{return prev+curr.salary;},0);
// console.log(totalSalary);

//Highest Years of Experience with reduce
// let highestYearsofExp=employees.reduce((prev,curr)=>{
//   return prev.yearsOfExp>curr.yearsOfExp?prev:curr;
// })
// console.log(highestYearsofExp)

//Get the people data with yrs of exp. greater than 4
//Chaining of data with MRF
let data = employees.filter((data) => data.yearsOfExp > 4);
let res = data.map((data) => {
  console.log(`
   ID: ${data.id}
   Name: ${data.name}
   Salary: ${data.salary}
   `);
});
