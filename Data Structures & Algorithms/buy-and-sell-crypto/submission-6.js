class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProfit = 0;
        for (let r = 0; r < prices.length; ++r) {
            if (prices[l] > prices[r]) {
                l = r;
            }
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        }

        return maxProfit;
    }
}