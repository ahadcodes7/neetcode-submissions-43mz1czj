class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProfit = 0;
        for (let r = 0; r < prices.length; ++r) {
            while (prices[l] > prices[r]) {
                l++;
            }
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        }

        return maxProfit;
    }
}

/* 
    approach:
    variable sized sliding window
    shrink the window when we encounter an invalid case like buy on max and sell on loss
    other wise grow the window and keep track of the maxProfit
*/