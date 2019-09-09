function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
   let max: number = 0;

   for (let i: number = 0; i < inputArray.length - (k - 1); i++) {
      let t: number = 0;

      for (let j: number = 0; j < k; j++) {
         t += inputArray[i + j];
      }
      if (t > max) { max = t; }
   }

   return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 1));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 5));