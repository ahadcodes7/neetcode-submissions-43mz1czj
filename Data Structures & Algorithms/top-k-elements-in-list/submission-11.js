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
        const maxHeap = new MaxPriorityQueue((x) => x[1]);
        for (const [k, v] of map) {
            maxHeap.enqueue([k, v]);
        }

        while (k) {
            res.push(maxHeap.dequeue()[0]);
            k--;
        }

        return res;
    }
}
