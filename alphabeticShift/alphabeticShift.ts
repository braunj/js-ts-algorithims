function alphabeticShift(inputString: string): string {
   let result: string = "";
   for (let i: number = 0; i < inputString.length; i++) {
      let cc: number = inputString.charCodeAt(i);
      switch (cc) {
         case 122: result += "a";
            break;
         case 90: result += "A";
            break;
         default: result += String.fromCharCode(++cc);
      }
   }
   return result;
}

console.log(alphabeticShift("CraZy"));