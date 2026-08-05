class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newArr = nums.sort();
        for(var i = 0; i < nums.length; i++){
            if (newArr[i] < newArr[i+1]){
                continue;
            } else if(newArr[i] === newArr[i+1]){
                return true;
            }
        }

        return false;
    }
}
