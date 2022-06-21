/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const currentString = strs[i];
    const sortCurrentString = currentString.split("").sort().join("");

    if (map.has(sortCurrentString)) {
      const originalString = map.get(sortCurrentString);
      map.set(sortCurrentString, [currentString, ...originalString]);
    } else {
      map.set(sortCurrentString, [currentString]);
    }
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
