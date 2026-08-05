class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = [];

        for (let i = 0; i < numbers.length; i++){
            for(let j = numbers.length - 1; j > i; j--){
                if (numbers[i] + numbers[j] === target){
                    res.push(i+1,j+1);
                    return res;
                }
                else {
                    continue
                }
            }
        }
    }
}
