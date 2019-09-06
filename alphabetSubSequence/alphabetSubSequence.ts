function alphabetSubsequence(s: string): boolean {

   for (let i: number = 0; i < s.length - 1; i++) {
      let cc: number = s.charCodeAt(i);
      let cn: number = s.charCodeAt(i + 1);

      if (cn <= cc) {
         return false;
      }
   }

   return true;
}


console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
