// complete the given function

function palindrome(str){

	const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
	
}
module.exports = palindrome
