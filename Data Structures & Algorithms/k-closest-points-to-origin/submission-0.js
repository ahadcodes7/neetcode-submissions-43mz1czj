class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((x) => x[1]);
        for (let i = 0; i < points.length; ++i) {
            const p1 = [0, 0];
            const p2 = points[i];
            const d = Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
            minHeap.enqueue([i, d]);
        }

        const result = [];
        while (k !== 0) {
            result.push(points[minHeap.dequeue()[0]]);
            k--;
        }

        return result;
    }
}
