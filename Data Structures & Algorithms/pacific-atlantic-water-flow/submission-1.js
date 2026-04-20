class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pacQ = new Queue();
        const atlQ = new Queue();
        
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        for (let r = 0; r < ROWS; ++r) {
            pacQ.push([r, 0]);
            atlQ.push([r, COLS - 1]);
        }

        for (let c = 0; c < COLS; ++c) {
            pacQ.push([0, c]);
            atlQ.push([ROWS - 1, c]);
        }

        function bfs (q, ocean) {
            const dirs = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1]
            ];

            while (!q.isEmpty()) {
                const [r, c] = q.pop();
                ocean[r][c] = true;

                for (const [dr, dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;

                    if (nr >= 0 && nr < ROWS && nc >=0 && nc < COLS && !ocean[nr][nc] && heights[r][c] <= heights[nr][nc]) {
                        q.push([nr, nc]);
                    }
                }
            }
        }

        bfs(pacQ, pac);
        bfs(atlQ, atl);

        const res = [];
        for (let r = 0; r < ROWS; ++r) {
            for (let c = 0; c < COLS; ++c) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
