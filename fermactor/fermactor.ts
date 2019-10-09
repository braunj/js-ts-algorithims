function fermactor(n: number): number[] {
   let a: number = Math.ceil(Math.sqrt(n));
   let b: number;

   do {
      b = Math.sqrt(a * a++ - n);
   } while (b % 1 !== 0);

   return [--a, b, a ** 2, b ** 2, a ** 2 - b ** 2];
}

console.log(fermactor(15));
console.log(fermactor(5959));
console.log(fermactor(151));
console.log(fermactor(1515));
console.log(fermactor(0));
