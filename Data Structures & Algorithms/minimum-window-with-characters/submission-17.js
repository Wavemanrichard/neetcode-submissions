class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     *
     * the program should find the shortest substring in s that has t in it
     * duplicates if they are side by side or inside will be included in the string
     * take into account t having duplicates as well
     * s may have multiple substrings
     * when all the chars are satisfied we return the shortest substring
     * may also run into false positives, xyz in nwxqshyxsybz and we have
     * xyyxyyxyz
     *
     *
     *
     *change of approach have right go right through from start until it found all the chars in hash 

     and then keep reducing left checking whether the string is valid 

     if it reduced to where it is not valid then move right again until it is valid then repeat 

     when you get to the lowest it can for each check, make sure it is smaller than the last valid check after each check we can have the values stored in a variable or we use the left and right afterwards to save them  and return it 
     *
     *
     */

    minWindow(s, t) {
        let right = 0;
        let left = 0;
        let hash = new Map();
        let window = new Map();
        let check = new Map();
        let sub = "";
        let short = 0;
        let count = 0;

        for (let char of t) {
            if (hash.has(char)) {
                hash.set(char, hash.get(char) + 1);
            } else {
                hash.set(char, 1);
            }
        }
        let track = hash.values().reduce((a, b) => a + b, 0);
        while (right < s.length) {
            if (hash.has(s[right])) {
                if (window.has(s[right])) {
                    window.set(s[right], window.get(s[right]) + 1);
                } else {
                    window.set(s[right], 1);
                }

                if (check.get(s[right]) === undefined) {
                    check.set(s[right], 1);
                    count++;
                } else if (check.get(s[right]) < hash.get(s[right])) {
                    check.set(s[right], check.get(s[right]) + 1);
                    count++;
                }

                if (count === track) {
                    while (count === track) {
                        while (!window.has(s[left]) || window.get(s[left]) > hash.get(s[left])) {
                            if (hash.has(s[left])) {
                            window.set(s[left], window.get(s[left]) - 1);
                            }
                            left++;
                        }
                        if (short >= right - left + 1 || short === 0){
                            short = right - left + 1;
                            sub = s.slice(left, right + 1);
                        }

                        window.set(s[left], window.get(s[left]) - 1);
                        check.set(s[left], check.get(s[left]) - 1)
                        left++;
                        count--;
                    }
                }
            }

            right++;
        }
        return sub;
    }
}

// let left = 0;
// let right = 0;
// let hash = new Map();
// let hash1 = new Map();
// let window = new Map();
// let short = 0;
// let sub = "";

// for (let char of t) {
//     if (!hash.has(char)) {
//         hash.set(char, 1);
//     } else {
//         hash.set(char, hash.get(char) + 1);
//     }
// }

// let track = hash.values().reduce((a, b) => a + b, 0);
// while (right < s.length) {
//     if (hash.has(s[right])) {

//         if(window.has(s[right])){
//             window.set(s[right], window.get(s[right]) + 1)
//         } else {
//             window.set(s[right], 1);
//         }

//         if (hash1.get(s[right]) === undefined) {
//             hash1.set(s[right], 1);
//         } else if (hash1.get(s[right]) < hash.get(s[right])) {
//             hash1.set(s[right], hash1.get(s[right]) + 1);
//         }
//     }
//     let check = hash1.values().reduce((a, b) => a + b, 0);
//     if (track - check === 0) {
//         while (track - check === 0) {
//             while (!hash.has(s[left]) || window.get(s[left]) > hash.get(s[left])){
//                 if(hash.has(s[left])){
//                    window.set(s[left], window.get(s[left]) - 1);

//                 }

//                 left++;
//             }

//             if (short === 0 || short >= right - left + 1) {
//                 short = right - left + 1;
//                 sub = s.slice(left, right + 1);
//             }
//             window.set(s[left], window.get(s[left]) - 1);
//             hash1.set(s[left], hash1.get(s[left]) - 1);
//             left++;

//             check = hash1.values().reduce((a, b) => a + b, 0);
//         }
//     }

//     right++;
// }

// return sub;
