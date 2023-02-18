function isInteresting(time) {
  let distinctDigits = new Set(time).size;
  return distinctDigits <= 2;
}

function interesting_time(S,T) {
  let count = 0;
  let time = new Date("2022-03-25 " + S);
  endTime = new Date("2022-03-25 " + T);

  while (time <= endTime) {
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");
    let timeStr = hours + minutes + seconds;
    if (isInteresting(timeStr)) {
      console.log('timeStr',timeStr)
      count++;
    }
    time.setSeconds(time.getSeconds() + 1);
  }

  return count;
}

console.log(interesting_time('12:00:00','12:59:59'))