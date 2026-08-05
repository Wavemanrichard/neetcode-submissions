class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let left = 0;
       let lower = s.toLowerCase();
       let words = lower.split(" ");
       let store =[];

        

        if(s.length === 1){
            return true;
        }

       for (let i = 0; i < words.length; i++){
            store.push(...words[i].split(""));
            
       }
       for(let k = 0; k < store.length; k++){
        if (/[0-9]/.test(store[k])){
            return false;
        }
        
        if (/[^a-zA-Z]/.test(store[k])){
            store.splice(k,1);
            k--;
        } 
       }
       let right = store.length - 1;
        
       for(let j = 0; j < store.length / 2; j++){
        if (store[left] === store[right]){
            left++;
            right--;
        } else if (store[left] !== store[right]){
            return false;
        }

        if(right === left){
            return true;
        }
       }

        return true;
    }
}
