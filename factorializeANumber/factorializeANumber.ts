function factorializeANumber(num: number): number {
   let f: number = 1;
   for (let i: number = 1; i <= num; i++) {
      f *= i;
   }
   return f;
}

console.log(factorializeANumber(0));
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));