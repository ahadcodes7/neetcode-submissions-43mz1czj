class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const s of strs) {
            const bucket = new Array(26).fill(0);
            for (let i = 0; i < s.length; ++i) {
                const idx = s[i].charCodeAt(0) - "a".charCodeAt(0);
                bucket[idx]++;
            }
            
            const key = bucket.join(",");
            map.set(key, [...(map.get(key) || []), s])
        }

        const res = [];
        for (const [_, v] of map) {
            res.push(v);
        }

        return res;
    }
}
