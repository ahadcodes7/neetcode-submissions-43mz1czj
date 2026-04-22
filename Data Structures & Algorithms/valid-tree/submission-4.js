class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }

        const graph = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();
        this.dfs(graph, 0, visited);

        return visited.size === n;
    }

    dfs (graph, node, visited) {
        visited.add(node);
        for (const n of graph[node]) {
            if (!visited.has(n)) {
                this.dfs(graph, n, visited);
            }
        }
    }
}
