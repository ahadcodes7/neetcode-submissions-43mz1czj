class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tMap = new Map();
        for (const c of t) {
            tMap.set(c, (tMap.get(c) || 0) + 1);
        }

        const sMap = new Map();
        let l = 0;
        let res = "";
        for (let r = 0; r < s.length; ++r) {
            sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);
            while (this.isMapValid(sMap, tMap)) {
                const substr = s.substring(l, r + 1);
                if (res.length === 0) {
                    res = substr;
                } else if (substr.length < res.length) {
                    res = substr;
                }
                sMap.set(s[l], sMap.get(s[l]) - 1);
                l++;
            }
        }

        return res;
    }

    isMapValid (s, t) {
        for (const [k, v] of t) {
            if (!s.has(k) || s.get(k) < v) {
                return false;
            }
        }

        return true;
    }
}
