class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(this.maxHeap.dequeue());

        if (this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.front() + this.maxHeap.front()) / 2;
        }

        return this.minHeap.front();
    }
}
