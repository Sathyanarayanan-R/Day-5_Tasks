// 3. Do the below programs in arrow functions.
         // d. Return all the prime numbers in an array

primeNumFunc = numArr => {
  
    for(s = 0; s < numArr.length; s++) {
        if(numArr[s] == 2 || numArr[s] == 3)
            primeNum += numArr[s] + ' ';
        else if(numArr[s] <= 1 || numArr[s] % 2 == 0 || numArr[s] % 3 == 0)
            continue;
        else {
            for(j = 5; j * j <= numArr[s]; j += 6)
              if(numArr[s] % j == 0 || numArr[s] % (j + 2) == 0)
                 continue;
            primeNum += numArr[s] + ' ';
        }
    }
    return primeNum;
}


let n = [1, 2, 3, 4, 0, 5, 6, 9, 10, 11, 12, 13, 14, 37];
let primeNum = ' ';

const resPrime = primeNumFunc(n);

console.log(`Prime numbers in the given array is ${resPrime}`);
    

