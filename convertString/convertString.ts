function convertString(s: string, t: string): boolean {

   if (t.length === 0) {
      return true;
   } else if (s.indexOf(t.charAt(0)) === -1) {
      return false;
   } else {
      return convertString(s.substring(s.indexOf(t.charAt(0))), t.substring(1));
   }

   return true;
}


console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
console.log(convertString("abcd", "abcd"));
console.log(convertString("dcba", "abcd"));
console.log(convertString("addbyca", ""));
console.log(convertString("", "abcd"));
