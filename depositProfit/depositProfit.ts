function depositProfit(deposit: number, rate: number, threshold: number): number {
   let term: number = 0;
   rate = (rate + 100) / 100;

   while (deposit < threshold) {
      deposit *= rate;
      term++;
   }

   return term;
}

console.log(depositProfit(100, 20, 170));
console.log(depositProfit(100, 2, 170));
console.log(depositProfit(100, 0.2, 170));
