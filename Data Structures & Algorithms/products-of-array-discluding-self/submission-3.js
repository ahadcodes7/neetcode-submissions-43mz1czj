class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        const leftProduct = [];
        for (let i = 0; i < nums.length; ++i) {
            leftProduct[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;
        const rightProduct = [];
        for (let i = nums.length - 1; i >= 0; --i) {
            rightProduct[i] = postfix;
            postfix *= nums[i];
        }

        const res = [];
        for (let i = 0; i < nums.length; ++i) {
            res[i] = leftProduct[i] * rightProduct[i];
        }

        return res;
    }
}
