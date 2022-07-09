function isIsogram(str){
  const count = {}

  for (let i = 0, j = str.length; i < j; i++) {
    if (count.hasOwnProperty(str.charAt(i).toLowerCase())) return false
    count[str.charAt(i).toLowerCase()] = true
  }

  return true
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false