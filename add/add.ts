// sum two numbers
function add(param1: number, param2: number): number {
   return param1 + param2;
}

// sum unknown # of arguments as an array
function add2(...param1: number[]): number {
   let sum: number = 0;

   param1.forEach(element => {
      sum += element;
   });

   return sum;
}

// sum elements of an array
function add3(param1: number[]): number {
   let sum: number = 0;

   param1.forEach(element => {
      sum += element;
   });

   return sum;
}

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

console.log(add3([1, 2, 3, 4, 5, 6]));
console.log(add3([2, 3.3]));

