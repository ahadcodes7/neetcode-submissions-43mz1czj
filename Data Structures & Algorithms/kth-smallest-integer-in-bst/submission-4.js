/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const nodes = [];
        this.inorder(root, nodes);
        return nodes[k - 1];
    }

    inorder(root, nodes) {
        if (!root) {
            return null;
        }

        this.inorder(root.left, nodes);
        nodes.push(root.val);
        this.inorder(root.right, nodes);
    }
}
