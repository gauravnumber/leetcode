var RandomizedSet = function () {
  this.val = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.val.indexOf(val) === -1) {
    this.val.push(val);
    return true;
  }

  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.val.indexOf(val) === -1) {
    return false;
  }

  this.val.splice(this.val.indexOf(val), 1);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.val.at(Math.floor(Math.random() * this.val.length));
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log(obj.getRandom());
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log(obj.getRandom());

// I/P ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
// [[],[1],[2],[2],[],[1],[2],[]]

// O/P [null,true,false,true,1,true,false,2]
