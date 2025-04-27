
let countdown;
const startBtn = document.getElementById('startBtn');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

startBtn.addEventListener('click', startCountdown);

function startCountdown() {
  clearInterval(countdown); // Clear any previous countdowns

  let time = 3600; // example: 1 hour = 3600 seconds

  countdown = setInterval(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);

    if (time <= 0) {
      clearInterval(countdown);
      document.querySelector('.container').innerHTML = "<h1>🎉 Countdown Over! 🎉</h1>";
    }

    time--;
  }, 1000);
}

function formatTime(t) {
  return t < 10 ? `0${t}` : t;
}
