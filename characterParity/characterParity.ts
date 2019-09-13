function characterParity(symbol: string): string {
   const s: number = symbol.charCodeAt(0);

   if (s < 47 || s > 57) {
      return "not a digit";
   } else if (s % 2) {
      return "odd";
   } else { return "even"; }
}

console.log(characterParity("0"));
console.log(characterParity("104"));
console.log(characterParity("9"));
console.log(characterParity("5"));
console.log(characterParity("!"));
console.log(characterParity("q"));
