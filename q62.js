const uniquePaths = (m, n) => {
  let row = Array(n).fill(1), newRow

  for (let i = 0; i < m - 1; i++) {
    newRow = Array(n).fill(1)

    for (let j = n - 2; j > -1; j--) {
      newRow[j] = newRow[j + 1] + row[j]
    }

    row = newRow
  }

  return row[0]
}

console.log(uniquePaths(3, 7))