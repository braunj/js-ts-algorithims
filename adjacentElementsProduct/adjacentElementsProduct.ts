function adjacentElementsProduct(inputArray: number[]): number {
   let b: number = Number.NEGATIVE_INFINITY;
   let l: number = inputArray.length - 1;

   for (let i: number = 0; i < l; i++) {
      let t: number = mult(inputArray[i], inputArray[i + 1]);
      if (t > b) { b = t; }
   }

   return b;
}

function mult(a: number, b: number): number {
   return a * b;
}

console.log(adjacentElementsProduct([-3, 6, -2, 5, -7, 3, -9]));