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

        return this.recurse(heap);
    }

    recurse (heap) {
        if (heap.size() <= 1) {
            return heap.front() ? heap.front() : 0;
        }

        const x = heap.dequeue();
        const y = heap.dequeue();

        if (x === y) {
            return this.recurse(heap);
        } else {
            heap.enqueue(Math.abs(x - y));
            return this.recurse(heap);
        }
    }
}
