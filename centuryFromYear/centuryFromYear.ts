function centuryFromYear(year: number): number {
   let c: number = Math.floor(year / 100);
   if (year % 100) { ++c; }
   return c;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));