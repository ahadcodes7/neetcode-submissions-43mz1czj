class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for (const n of stones) {
            maxHeap.enqueue(n);
        }

        while (maxHeap.size() > 1) {
            const diff = maxHeap.dequeue() - maxHeap.dequeue();
            if (diff > -1) {
                maxHeap.enqueue(diff);
            }
        }

        return maxHeap.front();
    }
}
