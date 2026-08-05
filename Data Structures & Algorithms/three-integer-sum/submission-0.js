class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        [-1, -1, 0, 1, 2, 4]

        let res = [], sum =0;
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1, right = nums.length - 1;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            while (left < right) {
                sum = nums[left] + nums[i] + nums[right];
                if(sum === 0){
                    res.push([nums[left], nums[i], nums[right]]);
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left > right && nums[right] === nums[right - 1])right--;
                    right--;
                    left++;
                } else if (sum < 0){
                    left++;
                } else{ 
                    right--;
                }

            }
        }
        return res;
    }
}
