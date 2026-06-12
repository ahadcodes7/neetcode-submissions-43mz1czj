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
        for (let r = 0; r < s2.length; ++r) {
            if (r - l + 1 > s1.length) {
                const cnt = m2.get(s2[l]);
                if (cnt === 1) {
                    m2.delete(s2[l]);
                } else {
                    m2.set(s2[l], cnt - 1);
                }
                l++;
            }

            m2.set(s2[r], (m2.get(s2[r]) || 0) + 1);

            if (r - l + 1 === s1.length && this.areMapsEqual(m1, m2)) {
                return true;
            }
        }

        return false;
    }

    areMapsEqual (m1, m2) {
        if (m1.size !== m2.size) return false;
        
        for (const [k, v] of m1) {
            if ((m2.get(k) || 0) !== v) {
                return false;
            }
        }

        return true;
    }
}

