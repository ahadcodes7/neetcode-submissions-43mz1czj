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
        const minHeap = new MinPriorityQueue((x) => x.val);
        const dummy = new ListNode(0);
        let curr = dummy;

        for (let i = 0; i < lists.length; ++i) {
            const head = lists[i];
            if (head) {
                minHeap.enqueue(head);
            }
        }

        while (minHeap.size() > 0) {
            const node = minHeap.dequeue();
            curr.next = node;
            curr = curr.next;

            if (node.next) {
                minHeap.enqueue(node.next);
            }
        }

        return dummy.next;
    }

}
