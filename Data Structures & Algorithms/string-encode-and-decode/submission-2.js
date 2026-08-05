class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let s of strs){
            encoded += s.length + "*" + s 
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var decode = [];
        var i = 0;

        while(i < str.length){
            let j = str.indexOf("*", i);
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            let word = str.substring(i, i + length);
            decode.push(word);
            i += length;
        }

        return decode;
    }
}
