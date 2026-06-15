class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue((x) => x[1]);
        for (let i = 0; i < points.length; ++i) {
            const d = points[i][0] ** 2 + points[i][1] ** 2;
            maxHeap.enqueue([i, d]);
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        const result = [];
        while (maxHeap.size() > 0) {
            result.push(points[maxHeap.dequeue()[0]]);
        }

        return result;
    }
}
