class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = Math.round(nums.length / 2);

        // if ()

        while (left <= right) {

            if (nums[mid] > target) {
                right = mid - 1;
            }

            if (nums[mid] < target) {
                left = mid + 1;
            }

            if (nums[mid] === target) {
                return mid;
            }

            mid = Math.round((right + left) / 2);
        }



        return -1;
    }
}
