// 1. Do the below program in anonymous function & IIFE
    //  g. Remove duplicates from an array

(function (){
    function removeDuplicates(arr , n) {
        if (n == 0 || n == 1)
            return n;
 
        let j = 0;
 
        for (i = 0; i < n - 1; i++)
            if (arr[i] != arr[i + 1])
                arr[j++] = arr[i];
 
        arr[j++] = arr[n - 1];
        
        return j;
    }
    
        let arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
        let n = arr.length, resStr = '';
 
        n = removeDuplicates(arr, n);
 
        for (i = 0; i < n; i++)
            resStr += arr[i] + " ";
            
        console.log(`Unique values in the given array is --> ${resStr}`);    
})();
