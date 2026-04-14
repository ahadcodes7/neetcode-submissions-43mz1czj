class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] === "1" && !visited[i][j]) {
                    islands++;
                    this.dfs(grid, directions, visited, i, j);
                }
            }
        }

        return islands
    }

    dfs (grid, directions, visited, x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return;
        }

        if (visited[x][y]) {
            return;
        }


        if (grid[x][y] === "1") {
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                this.dfs(grid, directions, visited, x + dx, y + dy);
            }
        }
    }
}
