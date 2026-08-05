class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let res = [];
        // let suffix = 1;
        // let prefix = 1;
        // let track = 0;

        // for (let i = 0; i < nums.length; i++) {
        //     if (i === 0) {
        //         track = nums.length - 1;
        //         while (track > i) {
        //             suffix *= nums[track];
        //             track--;
        //         }
        //         res.push(suffix);
        //         suffix = 1;
        //     } else {
        //         track = 0;
        //         while (track < i) {
        //             prefix *= nums[track];
        //             track++;
        //         }

        //         let end = nums.length - 1;
        //         while (end > i) {
        //             suffix *= nums[end];
        //             end--;
        //         }

        //         res.push(prefix * suffix);
        //         prefix = 1;
        //         suffix = 1;
        //     }
        // }

        // return res;

        let prefix = [1], suffix = [1], res = [];
        let trackP = 0,trackS = nums.length - 1, calP = 1, calS = 1;

       while(trackP < nums.length - 1){
        calP *= nums[trackP];
        trackP++;
        prefix.push(calP);

        calS *= nums[trackS];
        trackS--;
        suffix.push(calS);
       }

       let rev = suffix.toReversed()
       for(let i = 0; i < prefix.length; i++){
        let cal = prefix[i] * rev[i];
        res.push(cal);
       }
    return res;


    }
}
