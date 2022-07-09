String.prototype.toJadenCase = function () {
  return this.toString().split(" ").map((c) =>
    c.charAt(0).toUpperCase() + c.slice(1)
  ).join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
