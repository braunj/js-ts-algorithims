function checkPalindrome(inputString: string): boolean {
   return inputString.toLowerCase() === inputString.toLowerCase().split("").reverse().join().replace(/,/g, '');
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
