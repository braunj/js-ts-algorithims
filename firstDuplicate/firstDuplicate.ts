function firstDuplicate(a: number[]): number {
   let ds: Set<number> = new Set();
   let df: number = -1;

   for (let n of a) {
      if (ds.has(n)) {
         return n;
      }
      ds.add(n);
   }

   return df;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
console.log(firstDuplicate([1, 2, 3, 4, 1, 2, 3, 3, 5, 1]));
console.log(firstDuplicate([5, 2, 4, 'b', 3, 'b', 5, 1]));
