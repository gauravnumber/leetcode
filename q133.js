class Node {
  constructor(val, neighbors) {
    this.val = val
    this.neighbors = neighbors
  }
}

const cloneGraph = node => {
  let oldToNew = {}

  const dfs = node => {
    if (node in oldToNew) return oldToNew[node]

    copy = new Node(node.val)
    oldToNew[node] = copy

    for (let nei = 0; nei < node.neighbors; nei++) {
      copy.neighbors.push(dfs(nei))
    }

    return copy
  }

  return node ? dfs(node) : null
}

