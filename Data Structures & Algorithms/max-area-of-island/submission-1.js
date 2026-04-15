class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        const ROWS = grid.length;
        const COLS = grid[0].length;

        function bfs (r, c) {
            const q = new Queue();
            q.push([r, c]);
            grid[r][c] = 0;

            let area = 1;

            while (!q.isEmpty()) {
                const [row, col] = q.pop();
                
                for (const [dr, dc] of dirs) {
                    const nr = dr + row;
                    const nc = dc + col;
                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 1) {
                        grid[nr][nc] = 0;
                        q.push([nr, nc]);
                        area++;
                    }
                }
            }

            return area;
        }

        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, bfs(r, c));
                }
            }
        }

        return maxArea;
    }
}
