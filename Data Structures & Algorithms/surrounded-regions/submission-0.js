class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const q = new Queue();
        const visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        for (let r = 0; r < ROWS; ++r) {
            if (board[r][0] === "O") {
                q.push([r, 0]);
            }

            if (board[r][COLS - 1] === "O") {
                q.push([r, COLS - 1]);
            }
        }

        for (let c = 0; c < COLS; ++c) {
            if (board[0][c] === "O") {
                q.push([0, c]);
            }

            if (board[ROWS - 1][c] === "O") {
                q.push([ROWS - 1, c]);
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
            visited[r][c] = true;

            for (const [dr, dc] of dirs) {
                const nr = dr + r;
                const nc = dc + c;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS 
                && !visited[nr][nc] && board[nr][nc] === "O") {
                    q.push([nr, nc]);
                }
            }
        }

        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                if (board[r][c] === "O" && !visited[r][c]) {
                    board[r][c] = "X";
                }
            }
        } 
    }
}
