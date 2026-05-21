class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        const res = [];
        while (k) {
            let maxVal = 0;
            let maxValKey = 0;
            for (const [k, v] of map) {
                if (v > maxVal) {
                    maxVal = v;
                    maxValKey = k; 
                }
            }

            res.push(maxValKey);
            map.delete(maxValKey);
            k--;
        }

        return res;
    }
}
