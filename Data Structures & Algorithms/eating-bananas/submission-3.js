class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles);
        let l = 1;
        let r = max;
        let min = Infinity;

        while (l <= r) {
            const k = l + Math.floor((r - l) / 2);
            const hours = this.isValidK(piles, k);

            if (hours <= h) {
                min = Math.min(k, min);
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return min;
    }

    isValidK(piles, k) {
        let hours = 0;

        for (const x of piles) {
            hours +=  Math.ceil(x / k);
        }

        return hours;
    }
}
