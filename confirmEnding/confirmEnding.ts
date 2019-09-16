function confirmEnding(str: string, target: string): boolean {
   return str.lastIndexOf(target) === str.length - target.length;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("Open sesame", ""));
console.log(confirmEnding("Open sesame", "e"));
console.log(confirmEnding("Open sesame", "ee"));
