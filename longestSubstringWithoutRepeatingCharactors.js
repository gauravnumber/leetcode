const longestSubstring = (s) => {
  let map = {}, left = 0

  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left
    map[v] = i

    return Math.max(max, i - left + 1)
  }, 0)
}

console.log(longestSubstring("abcdabce")) // => 5
console.log(longestSubstring("abcabcabc"))  // => 3
console.log(longestSubstring("bbbb")) // => 1