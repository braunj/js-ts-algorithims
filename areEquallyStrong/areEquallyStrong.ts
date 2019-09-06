function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
   let ys: number = Math.max(yourLeft, yourRight);
   let yw: number = Math.min(yourLeft, yourRight);

   let fs: number = Math.max(friendsLeft, friendsRight);
   let fw: number = Math.min(friendsLeft, friendsRight);

   return ys === fs && yw === fw;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
