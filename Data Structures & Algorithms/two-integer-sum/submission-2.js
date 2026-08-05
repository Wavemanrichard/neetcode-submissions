class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (var i = 0 ; i < nums.length - 1; i++){
            for(var j = i + 1; j < nums.length; j++){
                var res = nums[i] + nums[j];
                if (res === target){
                    return [i, j];
                }
            }
        }
    }
}
