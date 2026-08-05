class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let seen = new Set();
        const sortArr = nums.sort((a,b) =>{
           return a-b
        });
        let count = 1;
        let long = [];
        let i = 0;


        if (sortArr.length < 1){
            return 0;
        }

        while (i < sortArr.length ) {

        if(i === sortArr.length - 1){
            long.push(count); 
            i++;
            break;
        }

            if (sortArr[i] === sortArr[i + 1]){
                i++;
                
            } else if (sortArr[i] === sortArr[i + 1] - 1){
                i++;
                count++;

            } else {
                long.push(count);
                count = 1;
                i++;
            }
        }
        let longest = Math.max(...long);
        return longest;
    }
}
