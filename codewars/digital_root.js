function digital_root(n) {
  n = String(n);

  let sum = n.split("").reduce((a, b) => Number(a) + Number(b));
  sum = String(sum);

  let len = sum.length;

  if (len > 1) {
    return digital_root(sum);
  }

  return Number(sum);
}

console.log(digital_root(41)); // 3
console.log(digital_root(7)); // 7
console.log(digital_root(12331)); // 1
