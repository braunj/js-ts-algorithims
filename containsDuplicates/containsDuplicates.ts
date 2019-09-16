function containsDuplicates(a: number[]): boolean {
   let set: Set<number> = new Set(a);

   return !(set.size === a.length);
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 2, 1]));
console.log(containsDuplicates([]));
console.log(containsDuplicates([3, 1, 3]));
