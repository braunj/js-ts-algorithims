function commonCharacterCount(s1: string, s2: string): number {
   let sum: number = 0;

   let s1map: Map<string, number> = new Map();
   let s2map: Map<string, number> = new Map();

   for (let i: number = 0; i < s1.length; i++) {
      if (s1map.get(s1.charAt(i))) {
         s1map.set(s1.charAt(i), s1map.get(s1.charAt(i)) + 1);
      } else {
         s1map.set(s1.charAt(i), 1);
      }
   }

   for (let i: number = 0; i < s1.length; i++) {
      if (s2map.get(s2.charAt(i))) {
         s2map.set(s2.charAt(i), s2map.get(s2.charAt(i)) + 1);
      } else {
         s2map.set(s2.charAt(i), 1);
      }
   }

   s1map.forEach((value: number, key: string) => {
      if (s2map.get(key)) {
         sum += Math.min(s1map.get(key), s2map.get(key));
      }
   });

   return sum;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('adcaa', 'aabcc'));
console.log(commonCharacterCount('abcde', 'edcba'));
console.log(commonCharacterCount('edcbaa', 'abcdee'));