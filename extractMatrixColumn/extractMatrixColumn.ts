function extractMatrixColumn(matrix: number[][], column: number): number[] {
   let result: number[] = [];
   matrix.forEach(row => result.push(row[column]));
   return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 0));
