class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; ++i) {
            cars[i] = [position[i], speed[i]];
        }
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (let i = 0; i < cars.length; ++i) {
            const [p, s] = cars[i];
            const time = (target - p) / s;
            if (!stack.length) {
                stack.push(time);
                continue;
            } 
            
            if (stack[stack.length - 1] < time) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
