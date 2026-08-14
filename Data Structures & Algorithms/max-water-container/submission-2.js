class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var max = 0;
        var current = 0;
        var left = 0;
        var right = heights.length - 1;
        while (left < right) {

            var min = Math.min(heights[left], heights[right])
            current = (right - left) * min;
            if (current > max) {
                max = current;
            }
            if (heights[left] <= heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } 
        }


        return max;
    }


}
