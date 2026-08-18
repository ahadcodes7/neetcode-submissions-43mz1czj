class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const dirs: number[][] = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        let fresh = 0;
        const q: number[][] = [];
        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        let time = 0;
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
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        fresh--;
                        q.push([nr, nc]);
                    }
                }
            }
            
            if (q.length) {
                time++;
            }
        }

        return fresh === 0 ? time : -1;
    }
}
