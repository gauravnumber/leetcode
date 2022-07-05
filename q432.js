// not working
class Node {
  constructor() {
    // this.key_set = new Set()
    this.key_set = [];
    this.prev = this.nxt = null;
  }

  add_key(key) {
    // this.key_set.add(key)
    this.key_set.push(key);
  }

  remove_key(key) {
    let index = this.key_set.indexOf(key);
    this.key_set.splice(index, 1);
  }

  get_any_key() {
    if (this.key_set) {
      let result = this.key_set.pop();
      this.add_key(result);
      return result;
    } else {
      return null;
    }
  }

  count() {
    return this.key_set.length;
  }

  is_empty() {
    return this.key_set.length === 0;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head_node = new Node();
    this.tail_node = new Node();
    this.head_node.nxt = this.tail_node;
    this.tail_node.prev = this.head_node;
    return;
  }

  insert_after(x) {
    let node = new Node();
    let temp = x.nxt;
    x.nxt = node;
    node.prev = x;
    node.nxt = temp;
    temp.prev = node;
    return node;
  }

  insert_before(x) {
    return this.insert_after(x.prev);
  }

  remove(x) {
    let prev_node = x.prev;
    prev_node.nxt = x.nxt;
    x.nxt.prev = prev_node;
    return;
  }

  get_head() {
    return this.head_node.nxt;
  }

  get_tail() {
    return this.tail_node.prev;
  }

  get_sentinel_head() {
    return this.head_node;
  }

  get_sentinel_tail() {
    return this.tail_node;
  }
}

class AllOne {
  constructor() {
    this.dll = new DoubleLinkedList();
    this.key_counter = {};
    this.node_freq = {
      0: this.dll.get_sentinel_head(),
    };
  }

  _rmv_key_pf_node(pf, key) {
    let node = this.node_freq[pf];
    node.remove_key(key);

    if (node.is_empty()) {
      this.dll.remove(node);
      this.node_freq.pop(pf);
    }

    return;
  }

  inc(key) {
    this.key_counter[key]++;
    let cf = this.key_counter[key];
    let pf = this.key_counter[key] - 1;

    if (!this.node_freq.hasOwnProperty(cf)) {
      this.node_freq[cf] = this.dll.insert_after(this.node_freq[pf]);
    }

    this.node_freq[cf].add_key(key);

    if (pf > 0) {
      this._rmv_key_pf_node(pf, key);
    }
  }

  dec(key) {
    if (this.key_counter.hasOwnProperty(key)) {
      this.key_counter[key]--;

      let cf = this.key_counter[key];
      let pf = this.key_counter[key] + 1;

      if (this.key_counter[key] === 0) {
        this.key_counter.pop(key);
      }

      if (cf !== 0) {
        if (!this.node_freq.hasOwnProperty(cf)) {
          this.node_freq[cf] = this.dll.insert_before(this.node_freq[pf]);
        }

        this.node_freq[cf].add_key(key);
      }

      this._rmv_key_pf_node(pf, key);
    }
  }

  getMaxKey() {
    return this.dll.get_tail().count() > 0
      ? this.dll.get_tail().get_any_key()
      : "";
  }

  getMinKey() {
    return this.dll.get_tail().count() > 0
      ? this.dll.get_head().get_any_key()
      : "";
  }
}

let s = new AllOne();
s.inc("hello");
s.inc("hello");
console.log(s.getMaxKey());
console.log(s.getMinKey());
s.inc("leet");
console.log(s.getMaxKey());
console.log(s.getMinKey());
