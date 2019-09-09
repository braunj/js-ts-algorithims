function arrayConversion(inputArray: number[]): number {
   return sumArray(inputArray)[0];
}

function sumArray(a: number[]): number[] {
   if (a.length === 1) {
      return a;
   } else {
      let s: number[] = [];
      for (let i: number = 0; i < a.length; i += 2) {
         s.push(a[i] + a[i + 1]);
      }
      return multArray(s);
   }
}

function multArray(a: number[]): number[] {
   if (a.length === 1) {
      return a;
   } else {
      let s: number[] = [];
      for (let i: number = 0; i < a.length; i += 2) {
         s.push(a[i] * a[i + 1]);
      }
      return sumArray(s);
   }
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

