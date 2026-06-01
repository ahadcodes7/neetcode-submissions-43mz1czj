class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome (s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (!this.isAlphaNumeric(s[l])) {
                l++;
                continue;
            };

            if (!this.isAlphaNumeric(s[r])) {
                r--;
                continue;
            };

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric (c) {
        return (
            ("a" <= c && c <= "z") ||
            ("A" <= c && c <= "Z") ||
            ("0" <= c && c <= "9")
        );
    }
}