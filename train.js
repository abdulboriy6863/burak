//TASK G
function getHighestIndex(a) {
  // return Math.max(...a);
  const maxValue = Math.max(...a);
  const maxIndex = a.indexOf(maxValue);
  console.log(
    `Bu ${maxValue} soni arraynig tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi ${maxIndex} qaytadi`
  );
}
getHighestIndex([40, 24, 125]);
