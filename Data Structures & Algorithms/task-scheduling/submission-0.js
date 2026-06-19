class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0);
        for (const t of tasks) {
            freq[t.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        const maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; ++i) {
            if (freq[i] > 0) {
                maxHeap.enqueue(freq[i]);
            }
        }

        const q = new Queue();
        let time = 0;
        while (maxHeap.size() > 0 || q.size() > 0) {
            time++;

            if (maxHeap.size() > 0) {
                const cnt = maxHeap.dequeue() - 1;
                if (cnt > 0) {
                    q.push([cnt, time + n]);
                }
            }

            if (q.size() > 0 && q.front()[1] <= time) {
                const cnt = q.pop()[0];
                if (cnt > 0) {
                    maxHeap.enqueue(cnt);
                }
            }
        }

        return time;
    }
}
