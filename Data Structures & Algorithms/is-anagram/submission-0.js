class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len1 = s.length;
        const len2 = t.length;

        if (len1 !== len2){
            return false;
        }

        const sorted1 = s.split("").sort().join("");
        const sorted2 = t.split("").sort().join("");

        if (sorted1 === sorted2){
            return true;
        } 
        return false;
    }
}
