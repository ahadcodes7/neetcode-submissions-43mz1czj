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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while (l1 && l2) {
            const sum = carry + l1.val + l2.val;
            carry = 0;
            if (sum > 9) {
                let digit = sum % 10;
                carry = Math.floor(sum / 10);
                curr.next = new ListNode(digit);
            } else {
                curr.next = new ListNode(sum);
            }
            l1 = l1.next;
            l2 = l2.next;
            curr = curr.next;
        }

        while (l1) {
            const sum = carry + l1.val;
            carry = 0;
            if (sum > 9) {
                let digit = sum % 10;
                carry = Math.floor(sum / 10);
                curr.next = new ListNode(digit);
            } else {
                curr.next = new ListNode(sum);
            }
            l1 = l1.next;
            curr = curr.next;
        }

        while (l2) {
            const sum = carry + l2.val;
            carry = 0;
            if (sum > 9) {
                let digit = sum % 10;
                carry = Math.floor(sum / 10);
                curr.next = new ListNode(digit);
            } else {
                curr.next = new ListNode(sum);
            }
            l2 = l2.next;
            curr = curr.next;
        }  


        if (carry > 0) {
            curr.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
