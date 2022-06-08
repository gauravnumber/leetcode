/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let l = 0, r = s.length - 1;
    
    console.log(s)
    
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++;
        r--;
    }
    
    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama")) // => true
console.log(isPalindrome("race a car")) // => false