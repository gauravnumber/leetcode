class LRUCache {
    Map<Integer, Node> cache;
    Integer cap;
    Node left, right;
    
    public LRUCache(int capacity) {
        this.cap = capacity;
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }
    
    public void remove(Node node) {
        Node prev, nxt;
        prev = node.prev;
        nxt = node.next;
        
        prev.next = nxt;
        nxt.prev = prev;
    }
    
    public void insert(Node node) {
        Node prev, nxt;
        prev = this.right.prev;
        nxt = this.right;
        
        prev.next = node;
        nxt.prev = node;
        node.prev = prev;
        node.next = nxt;
    }
    
    public int get(int key) {
        if (this.cache.get(key) == null) {
            return -1;
        }
        
        this.remove(this.cache.get(key));
        this.insert(this.cache.get(key));
        return this.cache.get(key).val;
    }
    
    public void put(int key, int value) {
        Node nodeGet = this.cache.get(key);
        
        if (nodeGet == null) {
            this.remove(this.cache.get(key));
        }
        
        Node node = new Node(key, value);
        this.cache.put(key, node);
        this.insert(this.cache.get(key));
    }
}

class Node {
    int key, val;
    Node prev, next;
    Node(int key, int val) {
        this.key = key;
        this.val = val;
        this.prev = this.next = null;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */