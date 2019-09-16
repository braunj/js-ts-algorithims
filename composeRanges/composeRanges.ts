function composeRanges(nums: number[]): string[] {
   let result: string[] = [];
   let temp: number[] = [];
   let start: number = 0;
   let ptr: number = 0;

   while (ptr < nums.length) {
      start = nums[ptr];

      while (nums[ptr + 1] === nums[ptr] + 1) {
         console.log(nums[ptr]);
         ptr++;
      }

      console.log(start, nums[ptr]);
      const r: string = start.toString(10) + " -> " + nums[ptr];
      console.log(r);

      result.push(r);

      ptr++;
   }

   return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1]));
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9, 10, 11, 13]));
