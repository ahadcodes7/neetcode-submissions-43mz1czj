class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents (n, edges) {
        const graph = new Map();
        const visited = new Array(n).fill(false);
        let count = 0;

        for (let i = 0; i < n; ++i) {
            graph.set(i, []);
        }

        for (let [a, b] of edges) {
            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        for (let i = 0; i < n; ++i) {
            if (!visited[i]) {
                count++;
                this.dfs(graph, i, visited);
            }
        }

        return count;
    }

    dfs (graph, node, visited) {
        if (visited[node]) {
            return;
        }

        visited[node] = true;
        for (const n of graph.get(node)) {
            if (!visited[n]) {
                this.dfs(graph, n, visited);
            }
        }
    }
}
