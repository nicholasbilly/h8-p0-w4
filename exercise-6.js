function digitPerkalianMinimum(angka) {
    var faktor = []
    var result = []
    for (var i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            faktor.push(i)
        }
    }
    if (faktor.length == 1) {
        return 2
    } 

    for (var j = 0; j < faktor.length; j++) {
        for (var k = j+1; k < faktor.length; k++) {
            if (faktor[j] * faktor[k] == angka) {
                result.push(faktor[j], faktor[k])
            }
        }
    }
    var jawaban = [result[result.length-1], result[result.length-2]]
    return jawaban[0].toString().length + jawaban[1].toString().length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2