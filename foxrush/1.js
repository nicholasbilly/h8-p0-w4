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
  var genap = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      genap.push(arr[i])
    }
  }
  if (genap.length == 0) {
    return "tidak ada median"
  }
  var m = Math.floor(genap.length / 2) - 1
  if (genap.length % 2 != 0) {
      return genap[m + 1];
  } else {
      return (genap[m] + genap[m + 1]) / 2
  }
}

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8