// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// Easy

// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

//     For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

// Return the minimum possible sum of new1 and new2.

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

// Constraints:

//     1000 <= num <= 9999

// Accepted
// 24K
// Submissions
// 27.3K

function minimumSum(num: number): number {
  let sortArr: string[] = num
    .toString()
    .split("")
    .map((a) => Number(a))
    .sort((a, b) => a - b)
    .map((a) => String(a));

  let first: number = Number(sortArr[0] + sortArr[2]);
  let second: number = Number(sortArr[1] + sortArr[3]);

  return first + second;
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));

// Runtime: 138 ms, faster than 6.41% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Memory Usage: 43.7 MB, less than 24.36% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Next challenges:
// Valid Square
// Max Chunks To Make Sorted
// Previous Permutation With One Swap
