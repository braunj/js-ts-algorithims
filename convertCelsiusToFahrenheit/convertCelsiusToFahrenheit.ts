function celsiusToFahrenheit(celsius: number): number {
   return c2f(celsius);
}

function c2f(c: number): number {
   return ((9 * c) / 5) + 32;
}

function f2c(f: number): number {
   return (f - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));

console.log(f2c(-22));
console.log(f2c(14));
console.log(f2c(32));
