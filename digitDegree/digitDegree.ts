function digitDegree(n: number): number {
   let counter: number = 0;

   while (n > 9) {
      let x: number = n.toString()
         .split("")
         .map(Number)
         .reduce((acc, curValue) => { return acc + curValue; });

      n = x;
      counter++;
   }

   return counter;
}

console.log(digitDegree(0));
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(191));
console.log(digitDegree(99191));
