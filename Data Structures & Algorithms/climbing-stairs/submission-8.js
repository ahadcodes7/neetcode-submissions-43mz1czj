class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = [1, 2];

        for (let i = 2; i <= n; ++i) {
            const val = dp[i - 1] + dp[i - 2];
            dp[i] = val;
        }   

        return dp[n - 1];
    }
}
