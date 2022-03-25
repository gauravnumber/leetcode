// Roman to Integer

function romanToInt(s: string): number {
  let sl = s.length,
    lastIndex = sl - 1,
    sum: number = 0,
    lastChar: string,
    secondLastChar: string,
    lastRoman: number,
    secondLastRoman: number;

  let roman = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < sl; i++, lastIndex--) {
    lastChar = s.charAt(lastIndex);
    secondLastChar = s.charAt(lastIndex - 1);

    lastRoman = roman.get(lastChar) ?? 0;
    secondLastRoman = roman.get(secondLastChar) ?? 0;

    if (roman.has(lastChar)) {
      sum += lastRoman;

      if (secondLastChar && secondLastRoman < lastRoman) {
        sum -= secondLastRoman;
        lastIndex--;
      }
    }
  }

  return sum;
}

console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("XL"));
