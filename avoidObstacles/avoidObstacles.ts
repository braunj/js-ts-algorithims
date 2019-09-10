function avoidObstacles(ia: number[]): number {
   let max: number = Math.max(...ia);
   let magicNum: number = 2;

   for (let jumpTry: number = 1; jumpTry <= max; jumpTry++) {
      for (let jump: number = 1; jump * jumpTry <= max * magicNum; jump++) {
         if (ia.includes(jump * jumpTry)) {
            break;
         } else {
            if (jump * jumpTry >= max) {
               return jumpTry;
            }
         }
      }
   }

   return -1; // no solution found
}

console.log(avoidObstacles([1, 2]));
console.log(avoidObstacles([5, 5, 5]));
console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([5, 3, 6, 7, 9, 12]));
