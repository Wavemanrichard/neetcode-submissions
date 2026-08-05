class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // [10,4,5,2,8,2,7,3]
    maxProfit(prices) {
        let buy = prices[0], sell = prices[prices.length - 1];
        let profit = 0, i = 0;
        let tracker = prices.length - 1;
        let indexSell = prices.length - 1, indexBuy = 0;

        while (i < prices.length ){
            if (prices[i + 1] < buy && i < indexSell ){
                buy = prices[i + 1];
                indexBuy = i + 1;
            } 

            if(prices[tracker - 1] > sell && tracker !== 1){
                var temp = indexSell;
                indexSell = tracker - 1;
                
                if (indexSell > indexBuy){
                    sell = prices[tracker - 1];
                } else {
                    indexSell = temp;
                }
                
            }
            tracker--;
            i++;
        }

        if (buy > sell || sell === buy){
            profit = 0;
            return profit;
        }
        profit = sell - buy;

        return profit;
    }
}
