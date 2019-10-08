function evenDigitsOnly(n: number): boolean {
   let ns: number[] = [...n + ""].map(Number);

   for (let i: number = 0; i < ns.length; i++) {
      if (ns[i] % 2 !== 0) {
         return false;
      }
   }

   return true;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));