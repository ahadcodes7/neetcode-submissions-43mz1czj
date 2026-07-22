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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map = new Map();
        inorder.forEach((val, idx) => map.set(val, idx));
        let preIdx = 0;

        function dfs(left, right) {
            if (left > right) {
                return null;
            }
            
            const node = new TreeNode(preorder[preIdx]);
            const mid = map.get(preorder[preIdx]);
            preIdx++;

            node.left = dfs(left, mid - 1);
            node.right = dfs(mid + 1, right);

            return node;
        }

        return dfs(0, preorder.length - 1);
    }
}
