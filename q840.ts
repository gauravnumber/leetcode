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
);

console.log(numMagicSquaresInside([[8]]));

// console.log(
//   isMagicSquare([
//     [4, 3, 8],
//     [9, 5, 1],
//     [2, 7, 6],
//   ])
// );

// console.log(
//   m3x3([
//     [4, 3, 8, 4],
//     [9, 5, 1, 9],
//     [2, 7, 6, 2],
//     [2, 7, 6, 2],
//   ])
// );
