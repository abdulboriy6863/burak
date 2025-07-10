//TASK M
function getSquareNumbers(a: number[]) {
  const result = a.map((a) => a * a);
  console.log(result);
}

getSquareNumbers([1, 2, 3, 5]);

//TASK L
// function reverseSentence(a: string) {
//   const result = a.split("").reverse().join("");
//   const result2 = result.split(" ").reverse().join(" ");
//   console.log(result2);
// }

// reverseSentence("We like coding");

//TASK G
// function getHighestIndex(a) {
//   // return Math.max(...a);
//   const maxValue = Math.max(...a);
//   const maxIndex = a.indexOf(maxValue);
//   console.log(
//     `Bu ${maxValue} soni arraynig tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi ${maxIndex} qaytadi`
//   );
// }
// getHighestIndex([40, 24, 15]);

// import { log } from "console";

//TASK H
// function getPositive(a: number[]) {
//   let result = a
//     .filter((eleEle) => {
//       return eleEle > 0;
//     })
//     .join("");

//   console.log(result);
//   console.log(typeof result);
//   // console.log(`"${result}"`);
// }
// getPositive([1, -4, -30, 2]);

//TASK H2
// function getDigits(a: string) {
//   const result = a.split("").filter(Number).join("");
//   console.log(typeof result);
//   console.log(result);
// }
// getDigits("a14k139dji");

//TASK I
// function majorityElement(a: number[]) {
//   const count: { [key: number]: number } = {};
//   let maxValue = a[0];
//   let maxCount = 0;
//   for (let num of a) {
//     count[num] = (count[num] || 0) + 1;

//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxValue = num;
//     }
//   }
//   console.log(maxValue);
// }

// majorityElement([1, 3, 1, 1, 3, 2, 2, 56]);

//TASK J
// function findLongestWord(a: string) {
//   const words = a.split(" "),
//     result = words.sort((a, b) => b.length - a.length);
//   console.log(result[0]);
// }

// findLongestWord("I come from  Rakhmonovgayratbek");

//TASK K
// function countVowels(string: string) {
//   var counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] == "a" ||
//       string[i] == "e" ||
//       string[i] == "i" ||
//       string[i] == "o" ||
//       string[i] == "u"
//     ) {
//       counter++;
//     }
//   }
//   console.log(`Bu so'zimizni ichida ${counter} ta unli harf bor`);
// }

// countVowels("strinaag");
