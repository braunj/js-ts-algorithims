function boxBlur(image: number[][]): number[][] {
   const sz: number = image.length;
   const bx: number = 3;
   let blur: number[][] = [];
   let smBox: number[] = [];

   for (let row: number = 0; row <= sz - bx; row++) {
      blur.push(smBox);

      for (let col: number = 0; col <= sz - bx; col++) {

         let sum: number = 0;

         for (let r: number = 0; r < bx; r++) {
            for (let c: number = 0; c < bx; c++) {
               sum += image[col + c][row + r];
            }
         }

         blur[row][col] = Math.floor(sum / (bx * bx));
      }
   }

   return blur;
}



console.log(boxBlur(
   [[1, 1, 1],
   [1, 7, 1],
   [1, 1, 1]]));

console.log(boxBlur(
   [[1, 1, 1, 1],
   [1, 7, 1, 2],
   [1, 7, 1, 2],
   [1, 1, 1, 3]]));