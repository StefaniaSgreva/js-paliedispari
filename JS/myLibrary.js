function palindrome(str) {
      // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
      // Step 2. Reverse the String 
    let reverseStr = lowRegStr.split('').reverse().join(''); 
      // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr;
  }



 
 