class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN (tokens) {
        const map = {
            "+": (f, s) => s + f,
            "-": (f, s) => s - f,
            "*": (f, s) => s * f,
            "/": (f, s) => parseInt(s / f)
        };
        const stack = [];

        for (const t of tokens) {
            if (map[t]) {
                const first = stack.pop();
                const second = stack.pop();
                const func = map[t];
                stack.push(func(parseInt(first), parseInt(second)));
                continue;
            }
            stack.push(t);
        }

        return stack.pop();
    }
}
