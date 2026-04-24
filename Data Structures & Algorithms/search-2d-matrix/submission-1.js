class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r) {
            const midIdx = Math.floor(l + (r - l) / 2);
            const midVal = matrix[Math.floor(midIdx / COLS)][midIdx % COLS];
            if (midVal === target) {
                return true;
            } else if (target > midVal) {
                l = midIdx + 1;
            } else {
                r = midIdx - 1;
            }
        }

        return false;
    }
}
