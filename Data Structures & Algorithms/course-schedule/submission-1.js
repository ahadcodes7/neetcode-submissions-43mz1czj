class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);

        for (const [a, b] of prerequisites) {
            graph[a].push(b);
        }

        const visited = Array.from({ length: numCourses }, () => false);
        for (let i = 0; i < numCourses; ++i) {
            if (!visited[i] && this.hasCycle(graph, visited, i, new Set())) {
                return false;
            }
        }

        return true;
    }

    hasCycle (graph, visited, node, path) {
        if (path.has(node)) {
            return true;
        }

        if (visited[node]) {
            return false;
        }

        visited[node] = true;
        path.add(node);

        for (const n of graph[node]) {
            if (this.hasCycle(graph, visited, n, path)) {
                return true;
            }
        }

        path.delete(node);
        return false;
    }
}

