class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue();
        for (const s of stones) {
            heap.enqueue(s);
        }

        while (heap.size() > 1) {
            const diff = heap.dequeue() - heap.dequeue();
            if (diff > 0) {
                heap.enqueue(diff);
            }
        }

        return heap.size() === 1 ? heap.front() : 0;
    }
}
