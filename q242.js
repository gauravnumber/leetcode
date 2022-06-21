/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const hashMap = {}
    
    for (let c of s) {
        hashMap[c] = (hashMap[c] || 0) + 1;
    }
    
    for (let c of t) {
        if (!hashMap[c]) return false
        hashMap[c]--
    }
    
    return true
};

console.log(isAnagram("anagram", "nagaram")); // => true
console.log(isAnagram("rat", "car")); // => false
