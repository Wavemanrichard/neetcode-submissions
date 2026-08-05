class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {

    var count = 0;
    var result = [];
    var seen = new Set();

    const arr = [...nums].sort((a, b) => a - b);

    for (var i = 0; i < arr.length; i++) {
      if (!seen.has(arr[i])) {
        seen.add(arr[i]);
        count = 1;


        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++;
          } else {
            break;
          }
        }

        result.push({ number: arr[i], val: count });
      }

      
    }

    var s = 0;
    var ans = [];
    while (s < k){
      var maxNum = result.reduce((max, current) =>{
        return current.val > max.val ? current : max
      }, result[0]);

      var index = result.indexOf(maxNum);

      ans.push(maxNum.number);
      result.splice(index, 1);
      s++;
    }

    return ans;
  }
}
