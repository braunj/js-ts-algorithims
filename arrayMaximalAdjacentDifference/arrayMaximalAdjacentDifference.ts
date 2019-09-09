function arrayMaximalAdjacentDifference(inputArray: number[]): number {
   let m: number = 0;

   for (let i: number = 0; i < inputArray.length - 1; i++) {
      let t: number = Math.abs(inputArray[i] - inputArray[i + 1]);
      if (t > m) { m = t; }
   }

   return m;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 9]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, -10]));
console.log(arrayMaximalAdjacentDifference([2, 4, -1, -10]));