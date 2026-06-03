class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for (const n of nums) {
            set.add(n);
        }

        let num = Math.min(...nums);
        let maxSeq = 0;
        const maxVal = Math.max(...nums);

        let currSeq = 0;
        while (num <= maxVal) {
            if (set.has(num)) {
                currSeq++;
                maxSeq = Math.max(maxSeq, currSeq);
            } else {
                currSeq = 0;
            }
            num++;
        }

        return maxSeq;
    }
}
