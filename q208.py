class TrieNode:
  def __init__(self):
    self.children = {}
    self.endOfWord = False

class Trie:
  def __init__(self):
    self.root = TrieNode()

  def insert(self, word: str) -> None:
    cur = self.root

    for c in word:
      if c not in cur.children:
        cur.children[c] = TrieNode()
      cur = cur.children[c]
    cur.endOfWord = True


  def search(self, word: str) -> bool:
    cur = self.root

    for c in word:
      if c not in cur.children:
        return False
      cur = cur.children[c]

    return cur.endOfWord

  def startWith(self, word: str) -> bool:
    cur = self.root
    
    for c in word:
      if c not in cur.children:
        return False
      cur = cur.children[c]
    
    return True

trie = Trie()
trie.insert("apple")
print(trie.search("apple"))
print(trie.startWith("ap"))