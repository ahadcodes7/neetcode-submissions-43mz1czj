class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m1 = new Map();
        for (const c of s1) {
            m1.set(c, (m1.get(c) || 0) + 1);
        }

        const m2 = new Map();
        let l = 0;
        let matches = 0;
        for (let r = 0; r < s2.length; ++r) {
            if (r - l + 1 > s1.length) {
                const cnt = m2.get(s2[l]);
                if (cnt === m1.get(s2[l])) matches--;
                if (cnt - 1 === m1.get(s2[l])) matches++;
                if (cnt === 1) {
                    m2.delete(s2[l]);
                } else {
                    m2.set(s2[l], cnt - 1);
                }
                l++;
            }

            const val = m2.get(s2[r]) || 0;
            if (val === m1.get(s2[r])) matches--;
            m2.set(s2[r], val + 1);
            if (val + 1 === m1.get(s2[r])) matches++;

            if (r - l + 1 === s1.length && matches === m1.size) {
                return true;
            }
        }

        return false;
    }
}

