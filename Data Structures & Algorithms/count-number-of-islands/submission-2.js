class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let islands = 0;

        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                if (!visited[r][c] && grid[r][c] === "1") {
                    islands++;
                    this.dfs(grid, visited, dirs, r, c, ROWS, COLS);
                }
            }
        }

        return islands;
    }

    dfs (grid, visited, dirs, r, c, ROWS, COLS) {
        if (r < 0 || r >= ROWS) {
            return;
        }

        if (c < 0 || c >= COLS) {
            return;
        }
        
        if (visited[r][c]) {
            return;
        }

        if (grid[r][c] === "0") {
            return;
        }

        visited[r][c] = true;
        for (const [dr, dc] of dirs) {
            this.dfs(grid, visited, dirs, r + dr, c + dc, ROWS, COLS);
        }
    }
}