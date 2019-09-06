function almostIncreasingSequence(sequence: number[]): boolean {
   let isBadSeq: boolean = false;
   for (let i: number = 0; i < sequence.length - 1; i++) {
      if (sequence[i] >= sequence[i + 1]) {
         if (isBadSeq) {
            return !isBadSeq;
         } else {
            isBadSeq = !isBadSeq;
         }
      }
   }

   return isBadSeq;
}

console.log(almostIncreasingSequence([1, 3, 1, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));