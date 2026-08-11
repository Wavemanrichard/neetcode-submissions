class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * 
     */
    // checkInclusion(s1, s2) {
    //     let hash = new Map();
    //     let hash1 = new Map();
    //     let left = 0;
    //     let right = 0, i = 0;

    //     let len = s1.length;

    //     while (i < len) {
    //         if (hash.has(s1[i])) {
    //             hash.set(s1[i], hash.get(s1[i]) + 1);
    //         }
    //         if (!hash.has(s1[i])) {
    //             hash.set(s1[i], 1);
    //         }
    //         i++;
    //     }

    //     //sliding window [aababbc] [abb]
    //     while (right < s2.length) {
    //         if (hash.has(s2[right])) {
    //             if (!hash1.has(s2[right])) {
    //                 hash1.set(s2[right], 0);
    //             }

    //             hash1.set(s2[right], hash1.get(s2[right]) + 1);
    //         }

    //         if (right - left + 1 === len) {
    //             let match = true;

    //             for(let [char, count] of hash){
    //                 if(hash1.get(char) !== count){
    //                     match = false;
    //                     break;
    //                 }
    //             }

    //             if(match){
    //                 return match;
    //             }

    //             if(hash1.has(s2[left])){
    //                 hash1.set(s2[left], hash1.get(s2[left]) - 1)
    //             }
    //             left++
    //         }
    //         right++;
    //     }
    //     return false;

    // }

// [abb] [aababbab]
    checkInclusion(s1, s2) {
    let hash = new Map();
    let left = 0;
    let right = 0;
    let matches = 0;

    for (let char of s1) {
        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
        } else {
            hash.set(char, 1);
        }
    }

    while (right < s2.length) {

        if (hash.has(s2[right])) {
            hash.set(s2[right], hash.get(s2[right]) - 1);

            if (hash.get(s2[right]) === 0) {
                matches++;
            }
        }

        if (right - left + 1 > s1.length) {

            if (hash.has(s2[left])) {

                if (hash.get(s2[left]) === 0) {
                    matches--;
                }

                hash.set(s2[left], hash.get(s2[left]) + 1);
            }

            left++;
        }

        if (matches === hash.size) {
            return true;
        }

        right++;
    }

    return false;
}
}
