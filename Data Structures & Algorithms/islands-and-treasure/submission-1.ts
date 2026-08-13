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

        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (grid[r][c] === 0) {
                    this.bfs(grid, r, c, dirs);
                }
            }
        }
    }

    bfs(grid: number[][], r: number, c: number, dirs: number[][]) {
        const q = [[r, c]];
        let step = 1;
        while (q.length) {
            const n = q.length;

            for (let i = 0; i < n; ++i) {
                const [row, col] = q.shift()!;

                for (const [dr, dc] of dirs) {
                    const nr = dr + row;
                    const nc = dc + col;

                    if (
                        nr >= 0 &&
                        nr < grid.length &&
                        nc >= 0 &&
                        nc < grid[0].length &&
                        ![0, -1].includes(grid[nr][nc]) &&
                        grid[nr][nc] > step
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
