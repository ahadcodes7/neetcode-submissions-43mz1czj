// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList (head) {
        return this.dfs(head, new Map());
    }

    dfs (curr, map) {
        if (!curr) {
            return null;
        }

        if (map.has(curr)) {
            return map.get(curr);
        }


        const node = new Node(curr.val);
        map.set(curr, node);
        if (curr.next) {
            node.next = this.dfs(curr.next, map);
        }
        node.random = this.dfs(curr.random, map);
        return node;
    }
}
