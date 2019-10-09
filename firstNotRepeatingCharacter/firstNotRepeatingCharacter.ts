function firstNotRepeatingCharacter(s: string): string {
   let map: Map<string, number> = new Map();
   let result: string = "\'_\'";

   for (let i: number = 0; i < s.length; i++) {
      let c: string = s.charAt(i);
      if (map.has(c)) {
         map.set(c, map.get(c) + 1);
      } else {
         map.set(c, 1);
      }
   }

   let first: boolean = true;
   map.forEach((v, k) => {
      if (v === 1 && first) {
         result = k;
         first = !first;
      }
   });

   return result;
}



console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
