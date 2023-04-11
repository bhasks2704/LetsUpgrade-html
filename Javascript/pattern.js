// let size = 5;
// for (let i = 0; i < size; i++) {
//   let row = " ";
//   for (let j = 0; j < size; j++) {
//     if (i == j || j == size - 1 - i) {
//       row += "X";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }
// X   X
//   X X
//    X
//   X X
//  X   X
// ----------------------------------------------------------------
let size = 5;
for (let i = 0; i <= size; i++) {
  let row = "";
  for (let j = 0; j <= size; j++) {
    if (j == 1 && i >= j) {
      row += "X ";
    } else if (i == 0 && j >= i) {
      row += "X ";
    } else {
      row += "";
    }
  }
  console.log(row);
}
