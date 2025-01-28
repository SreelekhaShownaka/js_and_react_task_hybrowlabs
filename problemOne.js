// let charCount = (str) => {
//   str = str.replace(/\s/g, "");
//   let charMap = new Map();
//   let result = [];
//   for (let char of str) {
//     charMap.set(char, (charMap.get(char) || 0) + 1);
//   }
//   //   for (let char of str) {
//   //     if (charMap.has(char)) {
//   //       result.push(`${char.toUpperCase()}-${charMap.get(char)}`);
//   //       charMap.delete(char);
//   //     }
//   //   }
//   let seen = new Set();
//   for (let char of str) {
//     if (!seen.has(char)) {
//       result.push(`${char.toUpperCase()}-${str.split(char).length - 1}`);
//       seen.add(char);
//     }
//   }
//   return result.join("\n");
// };

// console.log(charCount("Amolya Sharma"));
// console.log(charCount("Chinmay Kulkarni"));

let charCount = (str) => {
  let countMap = {};
  let seen = new Set();
  for (let char of str) {
    char = char.toUpperCase();
    if (char !== " ") {
      countMap[char] = (countMap[char] || 0) + 1;
    }
  }
  for (let char of str) {
    char = char.toUpperCase();
    if (char !== " " && !seen.has(char)) {
      seen.add(char);
      console.log(`${char}-${countMap[char]}`);
    }
  }
};
charCount("Amolya Sharma");
console.log("===================");

charCount("Chinmay Kulkarni");
