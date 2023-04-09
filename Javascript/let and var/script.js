// var ->it is traditional keyword in js which has scope of functional
// 0r global scope. u can access the data throughout the function body.
// Es-6
// let ->
// block scope:
// let won't allow you to access the variable before declaration.
// {
// let data=?
// }

// var num = 10;
// {
//   var num = 20;
//   console.log(num);
// }
// console.log(num);

// let course = "MERN";
// if (course === "MERN") {
//   var streaml = "Front End Developer";
//   let stream2 = "Full Stack Developer";
// }
// console.log(course); //MERN
// console.log(streaml); //Front End Developer
// console.log(stream2); //stream2 is not defined

// let getData = () => {
//   var name1 = "Pardeep";
//   let name2 = "Abhijit";
// };
// getData();
// console.log(namel);//cannot access var value out of function.
// console.log(name2);//let cannot be accessed out of function.

function fun() {
  var num1 = 1;
  let num2 = 2;
  const num3 = 3;
  {
    var num1 = 100;
    let num2 = 200;
    const num3 = 300;
    console.log("Insidse Block:" + num1);
    console.log("Insidse Block:" + num2);
    console.log("Insidse Block:" + num3);
  }
  console.log("outside block:" + num1);
  console.log("outside block:" + num2);
  console.log("outside block:" + num3);
}
fun();
