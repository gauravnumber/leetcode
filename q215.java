// O(N lg K) running time + O(K) memory
// Other possibility is to use a min oriented priority queue that will store the K-th largest values. The algorithm iterates over the whole input and maintains the size of priority queue.

class Solution {
  public int findKthLargest(int[] nums, int k) {
    final PriorityQueue < Integer > pq = new PriorityQueue < > ();
    for (int val: nums) {
      pq.offer(val);

      if (pq.size() > k) {
        pq.poll();
      }
    }
    return pq.peek();
  }
}