class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets (nums) {
        const result = [];
        this.backtrack(nums, [], 0, result);
        return result;
    }

    backtrack (nums, path, i, result) {
        if (i >= nums.length) {
            result.push([...path]);
            return;
        }

        path.push(nums[i]);
        this.backtrack(nums, path, i + 1, result);

        path.pop();
        this.backtrack(nums, path, i + 1, result);
    }
}
