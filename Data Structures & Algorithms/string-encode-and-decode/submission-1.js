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
            while (str[j] !== "#") {
                j++;
            }

            const len = Number(str.substring(i, j));
            i = j + 1;
            strs.push(str.substring(i, i + len));
            i += len;
        }

        return strs;
    }
}
