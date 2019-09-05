function addTwoDigits(n: number): number {
   let s: string = n.toString(10);

   return parseInt(s[0], 10) + parseInt(s[1], 10);
}

console.log(addTwoDigits(32));