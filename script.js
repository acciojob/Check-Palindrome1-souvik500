// complete the given function

function palindrome(str){

	StringBuffer buffer = new StringBuffer(str);
      buffer.reverse();
      String data = buffer.toString();
      if(str.equalsIgnoreCase(data)){
         return true
      } else {
         return false;
      }
}
module.exports = palindrome
