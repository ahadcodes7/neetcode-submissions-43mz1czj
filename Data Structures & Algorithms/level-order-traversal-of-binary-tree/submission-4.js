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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (!root) return res;

        const q = [root];
        while (q.length) {
            const n = q.length;
            const lvl = []
            for (let i = 0; i < n; ++i) {
                const curr = q.shift();
                lvl.push(curr.val);
                if (curr.left) q.push(curr.left);
                if (curr.right) q.push(curr.right);
            }
            res.push(lvl);
        }

        return res;
    }
}


