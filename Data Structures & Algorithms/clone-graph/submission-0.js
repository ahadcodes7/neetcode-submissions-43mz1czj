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
    cloneGraph(node) {
        const map = new Map();
        return this.recurse(node, map);
    };

    recurse (node, map) {
        if (!node) {
            return null;
        }

        if (map.has(node)) {
            return map.get(node);
        }

        const cloned = new Node(node.val, []);
        map.set(node, cloned);

        for (const n of node.neighbors) {
            cloned.neighbors.push(this.recurse(n, map));
        }

        return cloned;
    }
}
