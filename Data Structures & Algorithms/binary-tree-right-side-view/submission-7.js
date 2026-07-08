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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        const q = new Queue();
        q.enqueue(root);

        const res = [];
        while (!q.isEmpty()) {
            const n = q.size();
            for (let i = 0; i < n; ++i) {
                const curr = q.dequeue();
                if (i === n - 1) res.push([curr.val]);
                if (curr.left) q.enqueue(curr.left);
                if (curr.right) q.enqueue(curr.right);
            }
        }

        return res;
    }
}
