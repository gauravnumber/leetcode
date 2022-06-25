// Time limit Exceeded
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.cache = {};
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node) {
    let prev = node.prev;
    let nxt = node.next;

    prev.next = nxt;
    nxt.prev = prev;
  }

  insert(node) {
    let prev = this.right.prev;
    let nxt = this.right;

    prev.next = nxt.prev = node;
    node.next = nxt;
    node.prev = prev;
  }

  get(key) {
    if (this.cache.hasOwnProperty(key)) {
      this.remove(this.cache[key]);
      this.insert(this.cache[key]);
      return this.cache[key].val;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.hasOwnProperty(key)) {
      this.remove(this.cache[key]);
    }

    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);

    if (Object.keys(this.cache).length > this.cap) {
      let lru = this.left.next;
      this.remove(lru);
      console.log(lru in this.cache);
      delete this.cache[lru.key];
    }
  }
}
