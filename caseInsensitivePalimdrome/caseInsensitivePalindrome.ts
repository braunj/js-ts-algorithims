function isCaseInsensitivePalindrome(inputString: string): boolean {
   return inputString.toLowerCase() === inputString.toLowerCase().split("").reverse().join().replace(/,/g, '');
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
console.log(isCaseInsensitivePalindrome("a"));
console.log(isCaseInsensitivePalindrome(""));
