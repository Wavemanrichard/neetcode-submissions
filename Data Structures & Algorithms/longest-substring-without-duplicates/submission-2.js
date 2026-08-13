class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let set = new Set();
        let longest = 0;

        while (right < s.length) {
            while (set.has(s[right])){
                set.delete(s[left]);
                left++;
            } 
                set.add(s[right]);
            
            
           longest = Math.max(longest, right - left + 1); 
           right++;
        }
        
        return longest;
    }
}

