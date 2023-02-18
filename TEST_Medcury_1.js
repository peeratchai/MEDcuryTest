function longestCommonPrefix(strArr) {
  if (strArr.length === 0) {
    return "";
  }

  let shortest = strArr.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortest.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j][i] !== shortest[i]) {
        return shortest.slice(0, i);
      }
    }
  }

  return shortest;
}

console.log("result", longestCommonPrefix(["flower","flow","flight"]));
