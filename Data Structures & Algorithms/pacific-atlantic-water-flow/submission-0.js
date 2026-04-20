class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pQ = new Queue();
        const aQ = new Queue();
        const pS = new Set();
        const aS = new Set();

        const ROWS = heights.length;
        const COLS = heights[0].length;
        for (let r = 0; r < ROWS; ++r) {
            pQ.push([r, 0]);
            aQ.push([r, COLS - 1]);
            pS.add(`${r},0`);
            aS.add(`${r},${COLS - 1}`);
        }

        for (let c = 0; c < COLS; ++c) {
            pQ.push([0, c]);
            aQ.push([ROWS - 1, c]);
            pS.add(`0,${c}`);
            aS.add(`${ROWS - 1},${c}`);
        }


        this.bfs(heights, pQ, pS, ROWS, COLS);
        this.bfs(heights, aQ, aS, ROWS, COLS);

        const res = [];
        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                const key = `${r},${c}`
                if (pS.has(key) && aS.has(key)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }

    bfs (heights, q, set, ROWS, COLS) {
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

                const key = `${nr},${nc}`
                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && heights[r][c] <= heights[nr][nc] && !set.has(key)) {
                    q.push([nr, nc]);
                    set.add(key);
                } 
            }
        }

    }
}
