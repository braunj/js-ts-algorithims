function circleOfNumbers(n: number, firstNumber: number): number {

   return ((n / 2) + firstNumber) % n;
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
console.log(circleOfNumbers(10, 6));
console.log(circleOfNumbers(12, 2));
console.log(circleOfNumbers(12, 8));
console.log(circleOfNumbers(12, 6));
