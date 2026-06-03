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
            if (!set.has(n + 1)) {
                let curr = n;
                let len = 0;
                while (set.has(curr)) {
                    len++;
                    curr--;
                    maxSeq = Math.max(maxSeq, len);
                }
            }
        }

        return maxSeq;
    }
}
