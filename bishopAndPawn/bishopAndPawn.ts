function bishopAndPawn(bishop: string, pawn: string): boolean {
   const bishopPos: number[] = pos2nums(bishop);
   const pawnPos: number[] = pos2nums(pawn);

   return Math.abs(bishopPos[0] - pawnPos[0]) === Math.abs(bishopPos[1] - pawnPos[1]);
}

function pos2nums(pos: string): number[] {
   const offsetletter: number = 96;
   const offsetnumber: number = 48;

   let posnum: number[] = [];
   const colnum: number = pos.charCodeAt(0) - offsetletter;
   posnum.push(colnum);
   const rownum: number = pos.charCodeAt(1) - offsetnumber;
   posnum.push(rownum);
   return posnum;
}

console.log(bishopAndPawn("a1", "c3"));
console.log(bishopAndPawn("a1", "e3"));
console.log(bishopAndPawn("a1", "h8"));
console.log(bishopAndPawn("a3", "h8"));
console.log(bishopAndPawn("h8", "c3"));
console.log(bishopAndPawn("h8", "h2"));
