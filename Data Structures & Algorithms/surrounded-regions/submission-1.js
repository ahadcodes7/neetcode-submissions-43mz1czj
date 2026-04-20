class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const q = new Queue();

        for (let r = 0; r < ROWS; ++r) {
            if (board[r][0] === "O") {
                q.push([r, 0]);
                board[r][0] = "T";
            }

            if (board[r][COLS - 1] === "O") {
                q.push([r, COLS - 1]);
                board[r][COLS - 1] = "T";
            }
        }

        for (let c = 1; c < COLS - 1; ++c) {
            if (board[0][c] === "O") {
                q.push([0, c]);
                board[0][c] = "T";
            }

            if (board[ROWS - 1][c] === "O") {
                q.push([ROWS - 1, c]);
                board[ROWS - 1][c] = "T";
            }
        }

        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (!q.isEmpty()) {
            const [r, c] = q.pop();

            for (const [dr, dc] of dirs) {
                const nr = dr + r;
                const nc = dc + c;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === "O") {
                    q.push([nr, nc]);
                    board[nr][nc] = "T";
                }
            }
        }

        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }
                
                if (board[r][c] === "T") {
                    board[r][c] = "O";
                }
            }
        } 
    }
}
