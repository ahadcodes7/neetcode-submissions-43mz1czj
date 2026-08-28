class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve (board: string[][]): void {  
        const q: number[][] = [];

        for (let r = 0; r < board.length; ++r) {
            if (board[r][0] === "O") {
                q.push([r, 0]);
                board[r][0] = "S";
            }

            if (board[r][board[0].length - 1] === "O") {
                q.push([r, board[0].length - 1]);
                board[r][board[0].length - 1] = "S";
            }
        }

        for (let c = 0; c < board[0].length; ++c) {
            if (board[0][c] === "O") {
                q.push([0, c]);
                board[0][c] = "S";
            }

            if (board[board.length - 1][c] === "O") {
                q.push([board.length - 1, c]);
                board[board.length - 1][c] = "S";
            }
        }

        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        let front = 0;
        while (front < q.length) {
            const [r, c] = q[front++];

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length && board[nr][nc] === "O") {
                    q.push([nr, nc]);
                    board[nr][nc] = "S";
                }
            }
        }


        for (let r = 0; r < board.length; ++r) {
            for (let c = 0; c < board[0].length; ++c) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }

                if (board[r][c] === "S") {
                    board[r][c] = "O";
                }
            }
        }
    }
}
