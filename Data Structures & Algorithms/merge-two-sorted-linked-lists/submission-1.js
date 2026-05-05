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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        let p1 = list1;
        let p2 = list2;

        while (p1 && p2) {
            if (p1.val < p2.val) {
                curr.next = new ListNode(p1.val);
                p1 = p1.next;
            } else {
                curr.next = new ListNode(p2.val);
                p2 = p2.next;
            }
            curr = curr.next;
        }

        while (p1) {
            curr.next = new ListNode(p1.val);
            p1 = p1.next;
            curr = curr.next;
        }

        while (p2) {
            curr.next = new ListNode(p2.val);
            p2 = p2.next;
            curr = curr.next;
        }

        return dummy.next;
    }
}
