class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const dirs: number[][] = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        for (let r = 0; r < board.length; ++r) {
            for (let c = 0; c < board[0].length; ++c) {
                if (board[r][c] === "O") {
                    const components: number[][] = [];
                    const surrounded = this.dfs(board, r, c, dirs, components);
                    if (surrounded) {
                        for (const [row, col] of components) {
                            board[row][col] = "X";
                        }
                    }
                }
            }
        }

        for (let r = 0; r < board.length; ++r) {
            for (let c = 0; c < board[0].length; ++c) {
                if (board[r][c] === "#") board[r][c] = "O";
            }
        }
    }

    dfs (grid: string[][], r: number, c: number, dirs: number[][], components: number[][]): boolean {
        const stack = [[r, c]];
        grid[r][c] = "#";
        
        let surrounded = true;
        while (stack.length) {
            const [row, col] = stack.pop();
            components.push([row, col]);

            if (row === 0 || row === grid.length - 1 || col === 0 || col === grid[0].length - 1) {
                surrounded = false;
            }

            for (const [dr, dc] of dirs) {
                const nr = dr + row;
                const nc = dc + col;

                if (
                    nr >= 0 && 
                    nr < grid.length &&
                    nc >= 0 &&
                    nc < grid[0].length &&
                    grid[nr][nc] === "O"
                ) {
                    grid[nr][nc] = "#";
                    stack.push([nr, nc]);
                }
            }
        }

        return surrounded;
    }
}
