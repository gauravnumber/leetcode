class TrieNode {
  constructor() {
    this.children = {}
    this.endOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let cur = this.root

    for (let c of word) {
      if (!cur.children.hasOwnProperty(c)) {
        cur.children[c] = new TrieNode()
      }

      cur = cur.children[c]
    }

    cur.endOfWord = true
  }

  search(word) {
    let cur = this.root

    for (let c of word) {
      if (!cur.children.hasOwnProperty(c)) {
        return false
      }

      cur = cur.children[c]
    }

    return cur.endOfWord
  }

  startWith(word) {
    let cur = this.root

    for (let c of word) {
      if (!cur.children.hasOwnProperty(c)) {
        return false
      }

      cur = cur.children[c]
    }

    return true
  }
}

let trie = new Trie()
trie.insert("apple")
trie.insert("pine")
console.log(trie.search("apple"))
console.log(trie.startWith("pine"))