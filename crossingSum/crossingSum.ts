function crossingSum(matrix: number[][], row: number, col: number): number {
   let foo: number = matrix[row].reduce(reducer);
   foo += colsum(matrix, row, col);
   return foo;
}

const reducer: any = (accumulator, currentValue) => accumulator + currentValue;

const colsum: any = (m: number[][], r: number, c: number) => {
   let sum: number = 0;

   for (let i: number = 0; i < m.length; i++) {
      if (i !== r) {
         sum += m[i][c];
      }
   }

   return sum;
};

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 0, 0));

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 2, 3));
