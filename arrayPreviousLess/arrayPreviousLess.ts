function arrayPreviousLess(items: number[]): number[] {
   let na: number[] = [-1];

   for (let i: number = 1; i < items.length; i++) {
      let t: number = -1;
      for (let j: number = 0; j < i; j++) {
         if (items[j] < items[i]) { t = items[j]; }
      }
      na.push(t);
   }

   return na;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([3, 5, 5, 4, 5]));
console.log(arrayPreviousLess([3, 3, 3, 3, 3]));
