class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let result = 0;
        const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));
        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    result = Math.max(result, this.dfs(grid, dirs, visited, i, j));
                }
            }
        }

        return result;
    }

    dfs (grid, dirs, visited, x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return 0;
        }

        if (visited[x][y]) {
            return 0;
        }

        if (grid[x][y] === 0) {
            return 0;
        }

        let area = 1;
        visited[x][y] = true;
        for (const [dx, dy] of dirs) {
            area += this.dfs(grid, dirs, visited, x + dx, y + dy);
        }

        return area;
    }
}
