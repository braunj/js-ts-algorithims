function allLongestStrings(inputArray: string[]): string[] {
   let l: number = inputArray.length;
   let lsa: string[] = [];
   let ls: number = 0;

   inputArray.forEach((elem: string) => {
      if (elem.length > ls) { ls = elem.length; }
   });

   for (let i: number = 0; i < l; i++) {
      if (inputArray[i].length === ls) { lsa.push(inputArray[i]); }
   }

   return lsa;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "foobar"]));