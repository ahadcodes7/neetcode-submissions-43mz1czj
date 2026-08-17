class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const dirs: number[][] = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        const q: number[][] = [];
        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                }
            }
        }

        let step = 1;
        while (q.length) {
            const n = q.length;
            for (let i = 0; i < n; ++i) {
                const [r, c] = q.shift()!;

                for (const [dr, dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;

                    if (
                        nr >= 0 &&
                        nr < grid.length &&
                        nc >= 0 &&
                        nc < grid[0].length &&
                        grid[nr][nc] === 2147483647
                    ) {
                        grid[nr][nc] = step;
                        q.push([nr, nc]);
                    }
                }
            }
            step++;
        }
    }
}
