window.onload = function () {
  let seconds = 0;
  let tens = 0;
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let interval;

  buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  buttonStop.addEventListener('click', () => {
    clearInterval(interval);
  });

  buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  });

  function startTimer() {
    tens++;
    appendTens.innerHTML = tens < 10 ? `0${tens}` : tens;

    if (tens >= 100) {
      seconds++;
      appendSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      tens = 0;
    }
  }
}