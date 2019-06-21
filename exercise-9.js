function checkAB(num) {
    var a = []
    var b = []
    var result = []

    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            a.push(i)
        }
    }

    for (var j = 0; j < num.length; j++) {
        if (num[j] == 'b') {
            b.push(j)
        }
    }

    for (var k = 0; k < a.length; k++) {
            result.push(Math.abs(a[k] - b[k]))
    }

    for (var h = 0; h < result.length; h++) {
      if (result[h] >= 3) {
        return true;
      } else {
        return false
      }
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false