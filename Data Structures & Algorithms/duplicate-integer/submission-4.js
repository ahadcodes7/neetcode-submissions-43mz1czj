class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums);
        console.log(set.length)
        return set.size !== nums.length;
    }
}
