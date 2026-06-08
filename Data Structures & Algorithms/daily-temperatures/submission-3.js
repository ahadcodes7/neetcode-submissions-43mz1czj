class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = [];
        for (let i = 0; i < temperatures.length; ++i) {
            while (stack[stack.length - 1] !== undefined && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const j = stack.pop();
                result[j] = i - j;
            }
            stack.push(i);
        }

        while (stack.length) {
            result[stack.pop()] = 0;
        }

        return result;
    }
}
