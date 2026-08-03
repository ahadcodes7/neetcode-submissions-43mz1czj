/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        const map = new Map();
        return this.dfs(node, map);
    }

    dfs(node, map) {
        if (!node) {
            return null;
        }

        if (map.has(node.val)) {
            return map.get(node.val);
        }

        const newNode = new Node(node.val);
        map.set(node.val, newNode);

        for (let i = 0; i < node.neighbors.length; ++i) {
            newNode.neighbors.push(this.dfs(node.neighbors[i], map));
        }

        return newNode;
    }
}
