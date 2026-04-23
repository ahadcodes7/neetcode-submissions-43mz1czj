class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);

        for (let [a, b] of prerequisites) {
            graph[a].push(b);
        }

        const result = [];
        const visited = Array.from({ length: numCourses }, () => false);
        for (let i = 0; i < numCourses; ++i) {
            if (!visited[i] && this.hasCycle(graph, visited, i, new Set(), result)) {
                return [];
            }
        }

        return result;
    }

    hasCycle (graph, visited, node, path, result) {
        if (path.has(node)) {
            return true;
        }

        if (visited[node]) {
            return false;
        }

        visited[node] = true;
        path.add(node);

        for (const n of graph[node]) {
            if (this.hasCycle(graph, visited, n, path, result)) {
                return true;
            }
        }

        path.delete(node);
        result.push(node);

        // return false;
    }
}

