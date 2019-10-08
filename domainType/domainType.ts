
function domainType(domains: string[]): string[] {
   let list: string[] = [];

   domains.forEach(sub => {
      let domain: string = sub.substring(sub.lastIndexOf("."));
      switch (domain) {
         // "organization", "commercial", "network", "information"
         case ".com": list.push("commercial"); break;
         case ".org": list.push("organization"); break;
         case ".net": list.push("network"); break;
         case ".info": list.push("information"); break;
         default: list.push("unknown");
      }
   });

   return list;
}

console.log(domainType(["en.wiki.org", "cb77.org", "codefights.com", "happy.net", "code.info"]));