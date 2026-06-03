class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        };
        
        const stack = [];
        for (const b of s) {
            if (["(", "{", "["].includes(b)) {
                stack.push(b);
            } else {
                if (map[b] !== stack.pop()) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
