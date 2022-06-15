// class Node {
//   constructor(val, neighbors) {
//     this.val = val
//     this.neighbors = neighbors
//   }
// }

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
  // console.log(`val`, val)
}

const cloneGraph = (node) => {
  let oldToNew = {};

  console.log(node);

  const dfs = (node) => {
    if (node in oldToNew) return oldToNew[node];

    // copy = new Node(node.val)
    copy = Node(node.val);
    oldToNew[node] = copy;

    for (let nei = 0; nei < node.neighbors; nei++) {
      copy.neighbors.push(dfs(nei));
    }

    return copy;
  };

  console.log(`node`, node);

  return node ? dfs(node) : null;
};

let n = Node([
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
]);
// console.log(`n.val`, n.val)

console.log(cloneGraph(n));
// console.log(cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))
