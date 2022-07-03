/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

var searchMatrix = function (matrix, target) {
  let row_num = matrix.length;
  let col_num = matrix[0].length;

  let begin = 0, end = row_num * col_num - 1;

  while (begin <= end) {
    let mid = Math.trunc((begin + end) / 2);
    let mid_value = matrix[Math.trunc(mid / col_num)][mid % col_num];

    if (mid_value == target) {
      return true;
    } else if (mid_value < target) {
      //Should move a bit further, otherwise dead loop.
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

// index / numberOfCols => which row
// index % numberOfCols => which col

// Another way to took at it is: lets say you have a matrix M with 4 rows and 3 columns. When we want to access M[2][1], the way the memory address is calculated is 2*3+1 = 7. so you are just reversing the calculation , row number is given by 7/3 = 2, and column is the offset in that row so for 7th element it is 7%3 = 1.
// https://icarus.cs.weber.edu/~dab/cs1410/textbook/7.Arrays/
console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3),
); // => true

console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13),
); // => false
