function arrayChange(inputArray: number[]): number {
   let cnt: number = 0;

   for (let i: number = 1; i < inputArray.length; i++) {
      while (inputArray[i] <= inputArray[i - 1]) {
         inputArray[i]++;
         cnt++;
      }
   }

   console.log(inputArray);

   return cnt;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 1, 4, 7]));
console.log(arrayChange([1, 1, 1, 7]));
console.log(arrayChange([1, 1, 1, -7]));
console.log(arrayChange([1, 1, 1, 2]));