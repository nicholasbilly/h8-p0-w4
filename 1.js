/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  var m = Math.floor(arr.length / 2) - 1
  if (arr.length % 2 != 0) {
      return arr[m + 1];
  } else {
      return (arr[m] + arr[m + 1]) / 2
  }
};

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8