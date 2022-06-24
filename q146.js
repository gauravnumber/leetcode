var Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.prev = this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = {};

  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
};

LRUCache.prototype.remove = function (node) {
  const prev = node.prev;
  const nxt = node.next;

  prev.next = nxt;
  nxt.prev = prev;
};

LRUCache.prototype.insert = function (node) {
  const prev = this.right.prev;
  const nxt = this.right;

  prev.next = node;
  nxt.prev = node;

  node.next = nxt;
  node.prev = prev;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
  }

  this.cache[key] = new Node(key, value);
  this.insert(this.cache[key]);

  if (Object.keys(this.cache).length > this.cap) {
    const lru = this.left.next;
    this.remove(lru);

    console.log(lru in this.cache);
    delete this.cache[lru.key];
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
obj.put(3, 3);
console.log(obj.get(2));
obj.put(4, 4);
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));

// I/P: ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
// O/P: [null,null,null,1,null,-1,null,-1,3,4]
