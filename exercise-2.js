function fpb(angka1, angka2) {
    var faktor = []

    for (var i = 1; i < angka1; i++) {
        if (angka1 % i == 0 && angka2 % i == 0) {
            faktor.push(i);
        }
    }
    return faktor[faktor.length -1]
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1