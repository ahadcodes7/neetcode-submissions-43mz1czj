class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Map();
        let l = 0;
        let maxf = 0;
        let res = 0;

        for (let r = 0; r < s.length; ++r) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, freq.get(s[r]));

            if (r - l + 1 - maxf > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }

            if (r - l + 1 - maxf <= k) {
                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
}