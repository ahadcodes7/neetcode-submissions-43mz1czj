class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute (nums) {
        const visited = Array.from({ length: nums.length}, () => false);
        const result = [];
        this.backtrack(nums, visited, [], result);
        return result;
    }

    backtrack (nums, visited, path, result) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; ++i) {
            if (!visited[i]) {
                path.push(nums[i]);
                visited[i] = true;
                this.backtrack(nums, visited, path, result);

                path.pop();
                visited[i] = false;
            }
        }
    }
}
