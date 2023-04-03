// let num=10;
// //block
// {
// let num=20;
// console.log(num)//20
// }

// console.log(num);//10

//looping->Block
// for(let i=0;i<=5;i++){
//     console.log(i);//0 1 2 3 4 5
// }
// console.log(i);//6

// let course="MERN";
// //block
// if(course==="MERN"){
//     var stream1="Front End Developer";
//     let stream2="Full Stack  Developer";//this is not accessible outside of the block
// }
// console.log(course);//MERN
// console.log(stream1);//Front End Developer
// console.log(stream2);

// var num=10;
// var num=20;
// console.log(num);

//Arrow function->var
//Block
// let getData=()=>{
//     var name1="Pardeep";
//     let name2="Abhijit";
// }

// getData();
// // console.log(name1);
// console.log(name2);

// const->it read only variable=>
// once you assigne cost to any variable ,u can not modify it
//block scope
// const num=10;
// num=11;
// console.log(num);

// function myfun(){
//     var num1=1;
//     let num2=2;
//     const num3=3;

//     {
//         var num1=100;
//         let num2=200;
//         const num3=300;
//         console.log("Inside block :"+ num1);//100
//         console.log("Inside block :"+ num2);//200
//         console.log("Inside block :"+ num3);//300
//     }

//     console.log("Outside block :"+ num1);//100
//     console.log("Outside block :"+ num2);//2
//     console.log("Outside block :"+ num3);//3
// }
// myfun();

// if(50===50){
//     let num1=10;
//     const num2=100;
// }
// console.log(num1);
// console.log(num2);

let getData = () => {
  var num1 = 10;
  let num2 = 20;
  const num3 = 30;
};
getData();
// console.log(num1);
// console.log(num2);
console.log(num3);

// var
// let
// const
