// let num = [10, 20, 30, 40, 50];

// let num1, num2, num3;
// [num1, num2, num3] = num;//destructure the elements into 3 variables.
// console.log(num1, num2, num3);

//Object Desctructure
// let employee = {
//   name: "Bhaskar",
//   age: "26",
//   designation: "Sr.SDE",
//   address: {
//     city: "Bangalore",
//     state: "Karnataka",
//     country: "India",
//   },
// };

// let { name, age, designation } = employee;
// console.log(`name : ${name}
// age : ${age}
// designation : ${designation}`);

// var { city, state, country } = employee.address;
// console.log(`city : ${city}
// state : ${state}
// country : ${country}`);

//Destructure of function
// function display({ firstName, lastName, age }) {
//   return `
//     name: ${firstName} ${lastName}
//     age : ${age}`;
// }
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 26,
// };
// console.log(display(person)); // calling of a fucntion and passing object.

let number = [45, 23, 12, 32, 55];
let min = Math.min(...number); // spread operator
console.log(min);

let array1 = [10, 20, 30, 40];
let array2 = [...array1, 50, 6, 70];
console.log(array2);
console.log(array1);
