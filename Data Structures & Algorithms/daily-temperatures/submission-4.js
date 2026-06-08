class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = [];
        for (let i = 0; i < temperatures.length; ++i) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const prev = stack.pop();
                result[prev] = i - prev;
            }
            stack.push(i);
        }

        while (stack.length) {
            result[stack.pop()] = 0;
        }

        return result;
    }
}
