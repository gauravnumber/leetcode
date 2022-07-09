function narcissistic(value) {
  value = String(value);
  let power = value.length;
  let sum = 0;

  for (let i = 0; i < power; i++) {
    let base = Number(value.charAt(i));
    let num = Math.pow(base, power);
    sum += num;
  }

  value = Number(value);

  return sum === value;
}

console.log(narcissistic(153)); // true
console.log(narcissistic(1652)); // false
