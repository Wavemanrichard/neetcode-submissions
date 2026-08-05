class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let longest = 0;

        for (let i = 0; i < s.length; i++){
            while(set.has(s[i])){
                set.delete(s[left])
                left++;
            }

            set.add(s[i]);

            longest = Math.max(longest, i - left + 1)
        }
        return longest;
    }
}
