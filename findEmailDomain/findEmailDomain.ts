function findEmailDomain(address: string): string {
   return address.substring(address.lastIndexOf("@") + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain("<>[]:,;@\\'!#$%&*+-/=?^_{}| ~.a\\'@example.org"));
console.log(findEmailDomain("braunj@cb77.org"));
console.log(findEmailDomain("james.braun@optum.com"));
