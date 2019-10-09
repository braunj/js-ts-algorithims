function findClosestPair(numbers: number[], sum: number): number {
   let d: number = Number.MAX_SAFE_INTEGER;
   for (let i: number = 0; i < numbers.length; i++) {
      for (let j: number = i + 1; j < numbers.length; j++) {
         if (numbers[i] + numbers[j] === sum) {
            let t: number = Math.abs(i - j);
            if (t < d) {
               d = t;
            }
         }
      }
   }

   return d === Number.MAX_SAFE_INTEGER ? -1 : d;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([0, 3, 4, 2, 0, 1], 5));
console.log(findClosestPair([2, 3, 7], 8));