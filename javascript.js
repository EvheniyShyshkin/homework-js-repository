 function isPalindrome(str) {

     var reversed = str.split("").reverse().join("");

     if(reversed === str) {
        return true;
     } else {
         return false;
     }
 }