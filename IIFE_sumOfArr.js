// 1. Do the below programs in anonymous function & IIFE 
        //  c. Sum of all numbers in an array

(function () {        
  let numArr = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15];
  let sumOfArr = 0;
  
    for(s = 0; s < numArr.length; s++) {
        sumOfArr += numArr[s];
    }
   console.log(`Sum of all the elements in the given array is ${sumOfArr}`);
})();
