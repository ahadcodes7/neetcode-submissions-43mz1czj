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

        const q = new Queue();
        q.enqueue(root);
        
        while (!q.isEmpty()) {
            const n = q.size();
            const lvl = []
            for (let i = 0; i < n; ++i) {
                const curr = q.dequeue();
                lvl.push(curr.val);
                if (curr.left) q.enqueue(curr.left);
                if (curr.right) q.enqueue(curr.right);
            }
            res.push(lvl);
        }

        return res;
    }
}


