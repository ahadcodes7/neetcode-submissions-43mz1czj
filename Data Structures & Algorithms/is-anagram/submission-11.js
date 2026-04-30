class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        for (const c of s) {
            map.set(c, (map.get(c) || 0) + 1);
        }

        for (const c of t) {
            if (!map.has(c)) {
                return false;
            }

            let cnt = map.get(c);
            if (cnt === 1) {
                map.delete(c);
            } else {
                map.set(c, cnt - 1);
            }
        }

        return map.size === 0;
    }
}
