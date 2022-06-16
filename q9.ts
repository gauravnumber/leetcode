function isPalindrome(x: number): boolean {
  let sum = 0,
    rem,
    n = x;

  if (x < 0) return false;

  while (n) {
    rem = Math.floor(n % 10);
    n = Math.floor(n /= 10);
    sum = sum * 10 + rem;
  }

  return x === sum;
}

console.log(isPalindrome(1111));
// console.log(isPalindrome(121));
