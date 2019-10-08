function fancyRide(l: number, fares: number[]): string {
   const disc: number = 20;

   const uberType: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

   let ptr: number = 0;

   while (l * fares[ptr] < disc) {
      ptr++;
   }
   return uberType[--ptr];
}

console.log(fancyRide(11, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(22, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(44, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(55, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(66, [0.3, 0.5, 0.7, 1, 1.3]));
