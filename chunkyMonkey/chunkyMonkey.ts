function chunkyMonkey(arr: any[], size: number): any[][] {
   let foo: any[] = [];

   for (let i: number = 0; i < arr.length; i += size) {
      let moo: any[] = [];
      for (let j: number = 0; j < size; j++) {
         if (i + j >= arr.length) { break; }

         moo.push(arr[i + j]);
      }
      foo.push(moo);
   }
   return foo;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey(["foo", "moo", "boo", "zoo"], 1));
console.log(chunkyMonkey(["foo", "moo", 2, 4, 6, 8, "boo", "zoo"], 12));
console.log(chunkyMonkey(["foo", "moo", 2, 4, 6, 8, "boo", "zoo"], 3));
