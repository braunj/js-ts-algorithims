function areSimilar(a: number[], b: number[]): boolean {
   if (isEqual(a, b)) {
      return true;
   }

   for (let i: number = 0; i < a.length - 1; i++) {
      let t: number = a[i];
      a[i] = a[i + 1];
      a[i + 1] = t;

      if (isEqual(a, b)) {
         return true;
      }
   }

   return false;
}

function isEqual(a: number[], b: number[]): boolean {
   return a.toString() === b.toString();
}


console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3, 4], [2, 1, 4, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
