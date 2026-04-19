class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (const s of strs) {
            str += s.length + "#" + s;
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;

            const len = parseInt(str.slice(i, j));
            strs.push(str.slice(j + 1, len + j + 1));

            i = j + len + 1;
        }

        return strs;
    }
}
