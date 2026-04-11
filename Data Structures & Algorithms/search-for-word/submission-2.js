class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist (board, word) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(null));

        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[0].length; ++j) {
                if (this.backtrack(board, word, directions, visited, i, j, 0)) {
                    return true;
                }
            }
        } 

        return false;
    }

    backtrack (board, word, directions, visited, x, y, wordIdx) {
        if (wordIdx === word.length) {
            return true;
        }

        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
            return false;
        }

        if (board[x][y] !== word[wordIdx]) {
            return false;
        }

        if (visited[x][y]) {
            return false;
        }

        visited[x][y] = true;
        for (const [dx, dy] of directions) {
            if (this.backtrack(board, word, directions, visited, x + dx, y + dy, wordIdx + 1)) {
                return true;
            }
        }

        visited[x][y] = false;
        return false;
    }
}
