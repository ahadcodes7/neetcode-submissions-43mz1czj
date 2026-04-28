class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push([timestamp, value]);
            return;
        }
        this.keyStore.set(key, [[timestamp, value]]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key);
        if (!list ||!list.length ) return "";

        let l = 0;
        let r = list.length - 1;
        let max = -1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const [ts] = list[mid];

            if (ts <= timestamp) {
                max = Math.max(max, mid);
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return max === -1 ? "" : list[max][1];
    }
}

