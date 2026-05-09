/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let l = dummy;
        let r = dummy;

        for (let i = 0; i < n; ++i) {
            r = r.next;
        }

        while(r.next) {
            l = l.next;
            r = r.next;
        }

        const tmp = l.next;
        l.next = l.next.next;
        // tmp.next = null;

        return dummy.next;
    }
}