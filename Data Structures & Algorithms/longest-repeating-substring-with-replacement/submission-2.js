class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let subs = new Map();
        let left = 0;
        let len = 0;
        let max = 0
        let res = 0
        let right = 0;
        let final = 0

        // subs.set(s[0], 1)
        while (right < s.length){
            if (subs.has(s[right])){
                subs.set(s[right], subs.get(s[right]) + 1);
                
            } else{
                subs.set(s[right], 1);  
                
            }

            len = right - left + 1;
            max = Math.max(...subs.values());
            res = len - max;
    
            if (res > k){
                subs.set(s[left], subs.get(s[left]) - 1)
                left++;
                len--;
            } else if (res === k || right === s.length - 1){
                final = Math.max(final, len);
            }

           right++
        }

        return final;

    }
}
