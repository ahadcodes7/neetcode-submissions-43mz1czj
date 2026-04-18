class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new Queue();
        let freshCount = 0;

        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (grid[r][c] === 2) {
                    q.push([r, c])
                } else if (grid[r][c] === 1) {
                    freshCount++;
                }
            }
        }

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        if (freshCount === 0) {
            return 0;
        }

        let minutes = 0;
        while (!q.isEmpty()) {
            const n = q.size();
            for (let i = 0; i < n; ++i) {
                const [row, col] = q.pop();
                for (const [dr, dc] of directions) {
                    const nr = dr + row;
                    const nc = dc + col;

                    if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        q.push([nr, nc]);
                        freshCount--;  
                    }
                }
            }
            minutes++;
        } 

        return freshCount === 0 ? minutes - 1 : -1;      
    }
}
