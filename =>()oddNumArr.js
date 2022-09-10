// 3. Do the below programs in arrow functions. 
   //       a. Print odd numbers in an array

const resOddNum = () => {
    let numArr = [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 18, 37];
    let resNum = '';

    for(s = 0; s < numArr.length; s++) {
        if(numArr[s] % 2 !== 0) {
               resNum += numArr[s] + ' ';
        }
     }
    console.log(`Odd numbers in the given array is : ${resNum}`);
 }

resOddNum();