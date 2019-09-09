function arrayReplace(inputArray: number[],
   elemToReplace: number,
   substitutionElem: number
): number[] {
   for (let i: number = 0; i < inputArray.length; i++) {
      if (inputArray[i] === elemToReplace) {
         inputArray[i] = substitutionElem;
      }
   }

   return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([1, 2, 1], 7, 3));
console.log(arrayReplace([2, 1, 2], 1, 3));