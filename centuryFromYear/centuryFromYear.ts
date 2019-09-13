function centuryFromYear(year: number): number {
   if (year % 100) {
      return (Math.floor(year / 100)) + 1;
   } else {
      return Math.floor(year / 100);
   }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));