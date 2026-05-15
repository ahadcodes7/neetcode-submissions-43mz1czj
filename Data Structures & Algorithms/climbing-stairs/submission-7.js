class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = [0, 1, 2];

        for (let i = 3; i <= n; ++i) {
            const val = dp[i - 1] + dp[i - 2];
            dp[i] = val;
        }   

        return dp[n];
    }
}
