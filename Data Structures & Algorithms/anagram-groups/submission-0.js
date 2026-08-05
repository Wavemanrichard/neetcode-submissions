class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var group = []
        var result = []
        var matches = [] 
        var indexes = [];
        var seen = new Set();

        if (strs.length === 0) return result;

        strs.map((w) => {
          group.push(w.split("").sort().join(""));
        });

        for (var i = 0; i < strs.length; i++){
          if(seen.has(i)) continue;
          matches.push(strs[i]);
          seen.add(i);
          for (var j = i + 1; j < strs.length; j++){
            if(!seen.has(j) && group[i] === group[j]){
              matches.push(strs[j]);
              seen.add(j);
            }
            continue;
          }
          result.push(matches);
          matches = [];
        }

        return result;

    }
}
