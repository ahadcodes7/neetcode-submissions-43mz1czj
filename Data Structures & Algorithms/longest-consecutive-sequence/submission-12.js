class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive (nums) {
        const set = new Set();
        for (const n of nums) {
            set.add(n);
        }

        let maxSeq = 0;
        for (const n of set) {
            if (!set.has(n - 1)) {
                let len = 0;
                while (set.has(n + len)) {
                    len++;
                }
                maxSeq = Math.max(maxSeq, len);
            }
        }

        return maxSeq;
    }
}
