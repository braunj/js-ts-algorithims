function chessBoardCellColor(cell1: string, cell2: string): boolean {
   let c1x: number = cell1.charCodeAt(0) - 64;
   let c1y: number = cell1.charCodeAt(1) - 48;
   let c2x: number = cell2.charCodeAt(0) - 64;
   let c2y: number = cell2.charCodeAt(1) - 48;

   console.log(c1x, c1y, c2x, c2y);
   return (((c1x + c1y) % 2) === ((c2x + c2y) % 2));
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
