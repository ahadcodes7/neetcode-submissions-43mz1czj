class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
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
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        this.backtrack(nums, path, i + 1, result);
    }
}
