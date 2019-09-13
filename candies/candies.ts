function candies(children: number, candy: number): number {
   return Math.floor(candy / children) * children;
}

console.log(candies(3, 10));
console.log(candies(4, 10));
console.log(candies(5, 10));
console.log(candies(10, 9));
console.log(candies(10, 10));
console.log(candies(10, 11));
