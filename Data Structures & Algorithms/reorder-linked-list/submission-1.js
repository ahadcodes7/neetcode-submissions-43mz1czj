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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev = null;
        while (slow) {
            const tmp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = tmp;
        }

        slow = head;
        while (prev && prev.next) {
            const tmp1 = slow.next;
            const tmp2 = prev.next;

            slow.next = prev;
            prev.next = tmp1;

            slow = tmp1;
            prev = tmp2;
        }
    }
}