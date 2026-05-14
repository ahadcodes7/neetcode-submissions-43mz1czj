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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        let tmp = [];

        while (lists.length !== 1) {
            for (let i = 0; i < lists.length; i += 2) {
                if (i + 1 < lists.length) {
                    tmp.push(this.mergePairs(lists[i], lists[i + 1]));
                } else {
                    tmp.push(lists[i]);
                }
            }

            lists = tmp;
            tmp = [];
        }

        return lists[0];
    }

    mergePairs (l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if (l1) {
            curr.next = l1;
        }

        if (l2) {
            curr.next = l2;
        }

        return dummy.next;
    }
}