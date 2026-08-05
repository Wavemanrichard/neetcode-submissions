class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, right = numbers.length - 1;
        const res = [];

        for (let i = 0; i < numbers.length; i++){
                if (numbers[left] + numbers[right] === target){
                    res.push(left+1,right+1);
                    return res;
                }
                else if (numbers[left] + numbers[right] > target){
                    right--;
                } else if (numbers[left] + numbers[right] < target){
                    left++;
                }
        }
    }
}
