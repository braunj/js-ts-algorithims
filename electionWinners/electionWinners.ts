function electionsWinners(votes: number[], k: number): number {
   const max: number = Math.max(...votes);

   return votes.reduce((tot, curr) => {
      if (curr + k > max) {
         tot++;
      }
      return tot;
   }, 0);
}

console.log(electionsWinners([2, 3, 5, 2], 1));
console.log(electionsWinners([2, 3, 5, 2], 2));
console.log(electionsWinners([2, 3, 5, 2], 3));
