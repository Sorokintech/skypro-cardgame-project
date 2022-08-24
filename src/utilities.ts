let secondsTime = 0;
let minutesTime = 0;
let counting;
function gameTimer(second, minute) {
  let timerGO = () => {
    secondsTime += 1;
    if (secondsTime < 10) {
      second.textContent = '0' + secondsTime;
    } else if (secondsTime < 60) {
      second.textContent = secondsTime;
    } else if (secondsTime === 60) {
      secondsTime = 0;
      second.textContent = '0' + secondsTime;
      minutesTime += 1;
      minute.textContent = '0' + minutesTime;
    }
  };
  counting = setInterval(() => {
    timerGO();
  }, 500);
}

function stopTime() {
  clearInterval(counting);
}
export { gameTimer, stopTime };
