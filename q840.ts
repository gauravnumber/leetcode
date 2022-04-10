// 840. Magic Squares In Grid
// Medium

// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

// Given a row x col grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).

// Example 1:

// Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
// Output: 1
// Explanation:
// The following subgrid is a 3 x 3 magic square:

// while this one is not:

// In total, there is only one magic square inside the given grid.

// Example 2:

// Input: grid = [[8]]
// Output: 0

// Constraints:

//     row == grid.length
//     col == grid[i].length
//     1 <= row, col <= 10
//     0 <= grid[i][j] <= 15

// Accepted
// 31.8K
// Submissions
// 82.9K

function m3x3(arr: number[][], startIndex = 0): number[][] {
  let arr1: number[][] = arr.slice(startIndex, startIndex + 3);

  arr1 = arr1.map((a: number[]) => a.slice(0, 3));

  return arr1;
}

function isMagicSquare(arr: number[][]): boolean {
  let sum: number[] = [];
  sum[0] = arr[0]?.reduce((a, b) => a + b);
  sum[1] = arr[1]?.reduce((a, b) => a + b);
  sum[2] = arr[2]?.reduce((a, b) => a + b);
  sum[3] = arr?.reduce((a: number, b: number[], i: number) => b[i] + a, 0);
  sum[4] = arr?.reduce((a: number, b: number[], i: number) => b[2 - i] + a, 0);
  sum[5] = arr?.map((a: number[]) => a[0]).reduce((a, b) => a + b);
  sum[6] = arr?.map((a: number[]) => a[1]).reduce((a, b) => a + b);
  sum[7] = arr?.map((a: number[]) => a[2]).reduce((a, b) => a + b);

  return sum.every((a) => sum[0] === a);
}

function numMagicSquaresInside(grid: number[][]): number {
  const row = grid.length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    if (isMagicSquare(m3x3(grid, i))) {
      count++;
    }
  }

  return count;
}

console.log(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ])
); // => 1

console.log(numMagicSquaresInside([[8]])); // => 0

console.log(
  numMagicSquaresInside([
    [2, 7, 6],
    [1, 5, 9],
    [4, 3, 8],
  ])
); // => 0

console.log(
  numMagicSquaresInside([
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
  ])
); // => 0

// console.log(
//   isMagicSquare([
//     [2, 7, 6],
//     [1, 5, 9],
//     [4, 3, 8],
//   ])
// );  // => true

// console.log(
//   m3x3([
//     [4, 3, 8, 4],
//     [9, 5, 1, 9],
//     [2, 7, 6, 2],
//     [2, 7, 6, 2],
//   ])
// );

// const numMagicSquaresInside = grid => {
//   const magicSquares = new Set([
//     '276951438',
//     '294753618',
//     '438951276',
//     '492357816',
//     '618753294',
//     '672159834',
//     '816357492',
//     '834159672',
//   ]);
//   let cnt = 0;
//   for (let i = 0; i < grid.length - 2; i++)
//     for (let j = 0; j < grid[0].length - 2; j++)
//       if (
//         magicSquares.has(
//           grid[i][j].toString() +
//           grid[i][j + 1] +
//           grid[i][j + 2] +
//           grid[i + 1][j] +
//           grid[i + 1][j + 1] +
//           grid[i + 1][j + 2] +
//           grid[i + 2][j] +
//           grid[i + 2][j + 1] +
//           grid[i + 2][j + 2],
//         )
//       )
//         cnt++;
//   return cnt;
// };
