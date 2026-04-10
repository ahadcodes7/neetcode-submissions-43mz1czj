class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum (nums, target) {
        const result = [];
        this.backtrack(nums, target, [], 0, 0, result);
        return result;
    }

    backtrack (nums, target, path, i, sum, result) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let j = i; j < nums.length; ++j) {
            path.push(nums[j]);
            this.backtrack(nums, target, path, j, sum + nums[j], result);

            path.pop();
        }
    }
}
