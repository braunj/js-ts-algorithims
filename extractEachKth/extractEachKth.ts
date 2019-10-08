function extractEachKth(inputArray: any[], k: number): any[] {

   return inputArray.filter((n, i) => {
      return (i + 1) % k !== 0;
   });
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(extractEachKth(["a", "s", "d", "f", "g", "h", "j", "k", "q", "w", "e"], 3));
