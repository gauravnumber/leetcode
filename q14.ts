// 14. Roman to integer
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lower-case English letters.

function longestCommonPrefix(strs: string[]): string {
  let i: number = 0,
    char: string;

  if (!strs.length) return "";

  while (true) {
    char = strs[0][i];

    let match = strs.every((str) => str[i] === char);
    if (match) {
      i++;
    } else {
      break;
    }
  }

  return strs[0].slice(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
