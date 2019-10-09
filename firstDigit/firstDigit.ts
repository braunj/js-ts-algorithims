function firstDigit(inputString: string): string {
   for (let i: number = 0; i < inputString.length; i++) {
      if (!isNaN(parseInt(inputString.charAt(i), 10))) {
         return inputString.charAt(i);
      }
   }

   return "no digits";
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
console.log(firstDigit('Oss'));
