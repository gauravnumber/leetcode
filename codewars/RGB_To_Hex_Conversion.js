function rgb(r, g, b){
  let array = [...arguments]
  
  return array.map(c => {
    if (c > 255) {
      return 255
    } else if (c < 0) {
      return 0
    }

    return c
  }).reduce((p, c) => p + c.toString(16).padStart(2, '0').toUpperCase(), "")
}

console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(0, 0, 0))
console.log(rgb(148, 0, 211))