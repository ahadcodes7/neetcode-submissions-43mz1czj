class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; ++i) {
            let j = i + 1;
            while (j < temperatures.length) {
                if (temperatures[i] < temperatures[j]) {
                    result[i] = j - i;
                    break;
                }
                j++;
            }
            if (!result[i]) {
                result[i] = 0;
            }
        }
        return result;
    }
}
