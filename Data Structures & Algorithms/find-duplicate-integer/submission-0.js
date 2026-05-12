class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if (fast === slow) {
                break;
            }
        }

        fast = 0;
        while (fast !== slow) {
            fast = nums[fast];
            slow = nums[slow];
        }

        return fast;
    }
}
