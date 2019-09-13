function companyBotStrategy(trainingData: number[][]): number {

   let sum: number = 0;
   let count: number = 0;

   for (let a: number = 0; a < trainingData.length; a++) {
      if (trainingData[a][1] === 1) {
         count++;
         sum += trainingData[a][0];
         // console.log(td[a]);
      }
   }

   return sum / count || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
