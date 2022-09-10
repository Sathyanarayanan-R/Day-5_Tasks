// 3. Do the below programs in arrow functions.
        // e. Return all the palindromes in an array

 isPalindrome = arrStr => {
      
      for(let s = 0; s < arrStr.length; s++) {
          resArr[s] = `${arrStr[s]} is a palindrome`;
          for(let j = 0; j < arrStr[s].length/2; j++) {
              
                if(arrStr[s][j] !== arrStr[s][arrStr[s].length - 1 - j])
                   resArr[s] = `${arrStr[s]} is not a palindrome`;
                   break;
          }
      }
      return resArr; 
}

let arr = ['spray', 'madam', 'limit', 'exuberant', 'ABCDCBA', 'level'];
let resArr = [];

const result = isPalindrome(arr);

for(s = 0; s < result.length; s++) {
       console.log(result[s]);
}
