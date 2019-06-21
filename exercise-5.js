function ubahHuruf(kata) {
    var result = ''
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < huruf.length - 1; j++) {
            if (kata[i] == huruf[j]) {
                result += huruf[j+1];
            }
        }
        if (kata[i] == huruf[25]) {
          result += huruf[0]
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu