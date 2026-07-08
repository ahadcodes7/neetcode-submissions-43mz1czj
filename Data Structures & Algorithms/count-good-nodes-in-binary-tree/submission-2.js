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
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;
        const res = [0];
        this.dfs(root, root.val, res);
        return res[0];
    }

    dfs(root, target, res) {
        if (!root) {
            return null;
        }

        if (root.val >= target) {
            res[0]++;
            target = root.val;
        }

        this.dfs(root.left, target, res);
        this.dfs(root.right, target, res);

        return root;
    }
}
