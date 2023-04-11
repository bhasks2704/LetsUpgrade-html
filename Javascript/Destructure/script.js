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

// let number = [45, 23, 12, 32, 55];
// let min = Math.min(...number); // spread operator
// console.log(min);

// let array1 = [10, 20, 30, 40];
// let array2 = [...array1, 50, 6, 70];
// console.log(array2);
// console.log(array1);

// let data = ["a", "b", "c", "d", "e", "f"];
// let newdata = ["z", "x", ...data, "k", "t"];
// console.log(newdata);

// let android = ["Xiaomi", "One Plus", "Samsung", "vivo", "Oppo", "Realme"];
// let iphones = ["iphone 7", "iphone 8", "iphone 9", "iphone 10", "iphone 11"];

// let allphones = [...iphones, ...android, "Nokia"];
// console.log(allphones);

// let user1 = {
//   name: "user1",
//   age: 18,
// };
// let user2 = {
//   age: 19,
//   loc: "bangalore",
// };

// let merged = { ...user1, ...user2 };
// console.log(merged);

//spread operator is not used for objects as there are duplication in keys.
