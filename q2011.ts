// 2011. Final Value of Variable After Performing Operations
// Easy

// There is a programming language with only four operations and one variable X:

//     ++X and X++ increments the value of the variable X by 1.
//     --X and X-- decrements the value of the variable X by 1.

// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:
// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// Example 2:
// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.

// Constraints:

//     1 <= operations.length <= 100
//     operations[i] will be either "++X", "X++", "--X", or "X--".

function finalValueAfterOperations(operations: string[]): number {
  // let count = 0;

  // operations.forEach((value) => {
  //   switch (value) {
  //     case "X++":
  //     case "++X":
  //       count++;
  //       break;

  //     case "X--":
  //     case "--X":
  //       count--;
  //       break;
  //   }
  // });

  // return count;

  return operations.reduce((count, value) => {
    switch (value) {
      case "X++":
      case "++X":
        count++;
        break;

      case "X--":
      case "--X":
        count--;
        break;
    }
    return count;
  }, 0);
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));

// Runtime: 60 ms, faster than 98.10% of TypeScript online submissions for Final Value of Variable After Performing Operations.
// Memory Usage: 44.9 MB, less than 42.41% of TypeScript online submissions for Final Value of Variable After Performing Operations.
// Next challenges:
// Magic Squares In Grid
// Watering Plants II
// Count Elements With Strictly Smaller and Greater Elements
