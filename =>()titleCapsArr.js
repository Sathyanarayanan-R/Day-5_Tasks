// 3. Do the below programs in arrow functions.
      // b. Convert all the strings to title caps in a string array

const titleCapsArr = () => {
  let strArr = ['sPray', 'eLite', 'daily limIt is exceEded', 'exuberant', 'ABCDCBA', 'defiNition of stRinG'];
  
  for(let s = 0; s < strArr.length; s++) {
      
     strArr[s] = strArr[s].toLowerCase().split(' ');
    
     for (var j = 0; j < strArr[s].length; j++) {
          strArr[s][j] = strArr[s][j].charAt(0).toUpperCase() + strArr[s][j].slice(1);
     }
          
    console.log(strArr[s].join(' '));
  }
}

titleCapsArr();


