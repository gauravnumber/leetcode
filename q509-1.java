import java.util.HashMap;

class Solution {
    int helper(int n, HashMap<Integer, Integer> map) {
        if (map.containsKey(n)) return map.get(n);
        if (n == 0) return 0;
        if (n <= 2) return 1;
        
        int res = helper(n - 1, map) + helper(n - 2, map);
        map.put(n, res);
        return res;
    }
    
    public int fib(int n) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        return helper(n, map);
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.fib(12));
    }

}
