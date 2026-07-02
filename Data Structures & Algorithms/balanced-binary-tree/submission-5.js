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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }

        const left = this.getHeight(root.left);
        const right = this.getHeight(root.right);

        if (Math.abs(left - right) > 1) {
            return false;
        }

        return this.isBalanced(root.left) &&
                this.isBalanced(root.right);
    }

    getHeight (root) {
        if (!root) {
            return 0;
        }

        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
}