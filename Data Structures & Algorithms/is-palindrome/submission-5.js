class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (!this.isAlphaNumeric(s[l])) {
                l++;
                continue;
            }

            if (!this.isAlphaNumeric(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    isAlphaNumeric (char) {
        return (
            ( "A".charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0) )     
            || ( "a".charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0) )
            || ( "0".charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= "9".charCodeAt(0) )
        );
    }
}
