function differentSymbolsNaive(s: string): number {

   let ss: Set<string> = new Set(s.split(""));

   return ss.size;
}

console.log(differentSymbolsNaive(""));
console.log(differentSymbolsNaive("cabca"));
console.log(differentSymbolsNaive("abcde"));
