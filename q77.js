/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var helper = function (max, n, out = [], cur = [], index = 1) {
    if (cur.length === max) {
      out.push(cur);
      return [];
    } else {
      while (index <= n) {
        helper(max, n, out, [...cur, index], ++index);
      }
      return out;
    }
  };

  return helper(k, n);
};

console.log(combine(4, 2)); // => [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(combine(1, 1)); // =>  [[1]]
