class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (n - 1 !== edges.length) {
            return false;
        }

        const graph: number[][] = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited: Set<number> = new Set();
        const isValid = this.dfs(graph, visited, 0, -1);
        return isValid && visited.size === n;
    }

    dfs (graph: number[][], visited: Set<number>, node: number, parent: number): boolean {
        if (visited.has(node)) {
            return false;
        }

        visited.add(node);
        for (const e of graph[node]) {
            if (e === parent) continue;
            if (!this.dfs(graph, visited, e, node)) {
                return false;
            };
        }

        return true;
    }
}

/* 
    0 -> [1, 2, 3]
    1 -> [0, 4]
    2 -> [0]
    3 -> [0]
    4 -> [1]
*/

/* 
    for a graph to be a valid tree it must
    - have one component
    - no cycles

    we are given edges
    an obvious false would be 
    - if num of nodes are greater than edges.length -> not a single component
    - if nom of nodes are less than edges.length -> extra edges or cycles

    build graph
    recurse and detect both cycle or multiple components
*/