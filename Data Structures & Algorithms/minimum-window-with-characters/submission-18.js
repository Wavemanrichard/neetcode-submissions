class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     *
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