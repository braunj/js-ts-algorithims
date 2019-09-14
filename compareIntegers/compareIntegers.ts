function compareIntegers(a: string, b: string): string {
   let x: number = parseInt(a, 10) - parseInt(b, 10);

   return x > 0 ? "greater" : x < 0 ? "lesser" : "equal";
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
console.log(compareIntegers("0", "-1"));
console.log(compareIntegers("-1", "0"));
console.log(compareIntegers("0", "0"));
