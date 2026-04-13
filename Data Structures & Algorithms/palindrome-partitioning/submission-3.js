class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition (s) {
        const result = [];
        this.backtrack(s, [], 0, result);
        return result;
    }

    backtrack (s, path, idx, result) {
        if (idx >= s.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = idx; i < s.length; ++i) {
            const cut = s.slice(idx, i + 1);
            if (this.isPalindrome(cut)) {
                path.push(cut)
                this.backtrack(s, path, i + 1, result);
                path.pop();
            }
        }

    }

    isPalindrome (str) {
        let l = 0;
        let r = str.length - 1;

        while (l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
