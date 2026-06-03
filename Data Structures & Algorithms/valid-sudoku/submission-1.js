class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSet = new Set();
        const colSet = new Set();
        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board.length; ++j) {
                if (rowSet.has(board[i][j])) return false;

                if (colSet.has(board[j][i])) return false;

                if (board[i][j] !== ".") {
                    rowSet.add(board[i][j]);
                }

                if (board[j][i] !== ".") {
                    colSet.add(board[j][i]);
                }
            }
            rowSet.clear();
            colSet.clear();
        }

        const boardSet = new Set();
        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                boardSet.clear();

                for (let i = r; i < r + 3; ++i) {
                    for (let j = c; j < c + 3; ++j) {
                        const val = board[i][j];
                        if (boardSet.has(val)) return false;
                        if (val !== ".") {
                            boardSet.add(val);
                        }
                    }
                }
            }
        }

        return true;
    }
}
