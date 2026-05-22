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

        const bucket = Array.from({ length: nums.length + 1}, () => []);
        for (const [k, v] of map) {
            bucket[v].push(k);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; --i) {
            if (k === 0) break;
            const list = bucket[i];

            let j = 0;
            while (k !== 0 && j < list.length) {
                res.push(list[j]);
                j++;
                k--;
            }
        }

        return res;
    }
}

/* 
    - we will store values with freq in hash map
    - we will create bucket sort
    - then we will recurse backwards and get top k frequent elements
*/