class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let p1 = 0;
        let p2 = 0;

        let nums = [];

        while (p1 < nums1.length && p2 < nums2.length) {
            if (nums1[p1] < nums2[p2]) {
                nums.push(nums1[p1]);
                p1++;
            } else {
                nums.push(nums2[p2]);
                p2++;
            }
        }

        while (p1 < nums1.length) {
            nums.push(nums1[p1]);
            p1++;
        }

        while (p2 < nums2.length) {
            nums.push(nums2[p2]);
            p2++;
        }

        let l = 0;
        let r = nums.length - 1;
        const mid = l + Math.floor((r - l) / 2);

        if (nums.length % 2 !== 0) {
            return nums[mid];    
        } else {
            return (nums[mid] + nums[mid + 1]) / 2;
        }
    }
}

/* 
    we have two lists where we have to sort these 
*/