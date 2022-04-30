const bitwiseAdd = (first, second) => {
  while (second !== 0) {
    let carry = first & second
    first = first ^ second
    second = carry << 1
  }

  return first
}

const bitwiseInverse = number => bitwiseAdd(~number, 1)
const bitwiseSub = (first, second) => bitwiseAdd(first, bitwiseInverse(second))

console.log(bitwiseAdd(1, 5))
console.log(bitwiseInverse(3))
console.log(bitwiseSub(20, 3))