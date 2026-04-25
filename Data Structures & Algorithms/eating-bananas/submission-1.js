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
        let min = max;

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

    /* 
        solution:
            - we form our BS space from 1 to max(piles).
            - we derive k from this search space using binary search
            - we check if it is valid -> if valid store as candidate and move to left side
            - other wise move to right side

        1 2 3 4

        l     r


    */
}
