class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.dfs(n, new Map());

    }

    dfs (n, memo) {
        if (n <= 2) {
            return n;
        }

        if (memo.has(n)) {
            return memo.get(n);
        }
        
        memo.set(n, this.dfs(n - 1, memo) + this.dfs(n - 2, memo));
        return memo.get(n);
    }
}