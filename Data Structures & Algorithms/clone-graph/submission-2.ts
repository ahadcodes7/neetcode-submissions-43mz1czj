/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class GraphNode {
    public val: number;
    public neighbors: GraphNode[];

    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: GraphNode): GraphNode {
        if (!node) return null;
        const map = new Map<number, GraphNode>();
        return this.dfs(node, map);
    }

    dfs(node: GraphNode, map: Map<number, GraphNode>): GraphNode {
        const existing = map.get(node.val);
        if (existing) {
            return existing;
        }

        const newNode = new GraphNode(node.val, []);
        map.set(newNode.val, newNode);

        for (const n of node.neighbors) {
            newNode.neighbors.push(this.dfs(n, map));
        }

        return newNode;
    }
}
