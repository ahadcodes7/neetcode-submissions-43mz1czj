class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        const dirs = [
            [0, 1], 
            [1, 0], 
            [0, -1],
            [-1, 0],
        ];
        const visited = Array.from({ length: grid.length }, () =>
            new Array(grid[0].length).fill(false),
        );
        for (let r = 0; r < grid.length; ++r) {
            for (let c = 0; c < grid[0].length; ++c) {
                if (!visited[r][c] && grid[r][c] === "1") {
                    res++;
                    this.dfs(grid, r, c, dirs, visited);
                }
            }
        }

        return res;
    }

    dfs(grid, r, c, dirs, visited) {
        if (r < 0 || r >= grid.length) {
            return;
        }

        if (c < 0 || c >= grid[0].length) {
            return;
        }

        if (grid[r][c] === "0") {
            return;
        }

        if (visited[r][c]) {
            return;
        }

        visited[r][c] = true;
        for (const [dr, dc] of dirs) {
            this.dfs(grid, r + dr, c + dc, dirs, visited);
        }
    }
}
