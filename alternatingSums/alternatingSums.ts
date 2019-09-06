function alternatingSums(a: number[]): number[] {
   let tw: number[] = [0, 0];
   let tm: boolean = true;

   a.forEach(mw => {
      if (tm) {
         tw[0] += mw;
      } else {
         tw[1] += mw;
      }
      tm = !tm;
   });

   return tw;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));