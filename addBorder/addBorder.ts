function addBorder(picture: string[], bc: string): string[] {
   const len: number = picture[0].length;

   const bs: string = bc.repeat(len + 2);

   for (let i: number = 0; i < picture.length; i++) {
      picture[i] = bc + picture[i] + bc;
   }

   picture.unshift(bs);
   picture.push(bs);

   return picture;
}


console.log(addBorder(["abc", "ded", "bob"], "*"));