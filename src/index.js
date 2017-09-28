module.exports = function check(str, bracketsConfig) {
  // var reg1 = /(\\[.+\\])/,
  //     reg2 = /[\\[.+\\]]/,
  //     reg3 = /{\\[.+\\]}/;
  // if (str.match(reg1) && str.match(reg2) && str.match(reg3)) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  var count = 0;
  for (var firstInd = 0; firstInd < str.length; firstInd++) {
    if (str[firstInd] === '(' || str[firstInd] === '[' || str[firstInd] === '{') {
      count++;
    }
    if (str[firstInd] === ')' || str[firstInd] === '}' || str[firstInd] === ']') {
      count--;
    }
    if (count < 0) {
      break;
    }
    // if (str[firstInd] === '[') {
    //
    //   for (var secondInd = 0; secondInd < str.length - firstInd; secondInd++) {
    //     if (str[secondInd] === '[') {
    //       count++;
    //     }
    //     if (str[secondInd] === ']') {
    //       count--;
    //     }
    //     if (count < 0) {
    //       break;
    //     }
    //   }
    // }
    // if (str[firstInd] === '{') {
    //   for (var thirdInd = 0; thirdInd < str.length - thirdInd; thirdInd++) {
    //     if (str[thirdInd] === '{') {
    //       count++;
    //
    //     }
    //     if (str[thirdInd] === '}') {
    //       count--;
    //     }
    //     if (count < 0) {
    //       break;
    //     }
    //   }
    // }

  }
  if (count === 0) {
    return true;

  } else {
    return false;
  }
}

// function a(str) {
//   var reg = "[0-9]"
//   return str.match(reg)
// }
//
// a("9")
