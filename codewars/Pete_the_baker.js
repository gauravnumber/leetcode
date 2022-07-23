function cakes(recipe, available) {
  let i = Infinity;

  for (let ingredient in recipe) {
    if (available.hasOwnProperty(ingredient)) {
      let j = 0
      let availableIngredient = available[ingredient]
      let recipeIngredient = recipe[ingredient]

      while (availableIngredient >= recipeIngredient) {
        availableIngredient -= recipeIngredient
        j++
      }

      i = Math.min(i, j)
    } else {
      return 0
    }
  }

  return i
}

// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
