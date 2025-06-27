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
function getDigits(a: string) {
  const result = a.split("").filter(Number).join("");
  console.log(typeof result);
  console.log(result);
}
getDigits("a14k139dji");
