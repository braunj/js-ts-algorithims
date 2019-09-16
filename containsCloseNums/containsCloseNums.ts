function containsCloseNums(nums: number[], k: number): boolean {

   const na: number[] = [];

   for (let i: number = 0; i < nums.length; i++) {
      if (na[nums[i]] === undefined) {
         na[nums[i]] = i;
      } else if (na[nums[i]] === i - k) {
         return true;
      } else {
         na[nums[i]] = i;
      }
   }
   return false;

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2, 5], 2));
