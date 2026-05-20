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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let curr = dummy.next;
        let ptr = dummy.next;
        let steps = k;
        let prevGroupHead = dummy.next;
        let prevGroupTail = dummy;

        while (true) {
            while (steps) {
                if (!ptr) {
                    return dummy.next;
                }
                ptr = ptr.next;
                steps--;
            }

            let prev = null;
            while (curr !== ptr) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            prevGroupHead.next = curr;
            prevGroupTail.next = prev;
            prevGroupTail = prevGroupHead;
            prevGroupHead = curr;
            steps = k;
        }
    }
}
