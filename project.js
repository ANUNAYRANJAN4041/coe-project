// let countdown;
// let timeLeft = 10; // Starting from 10 seconds

// const timerDisplay = document.getElementById('timer');
// const startBtn = document.getElementById('startBtn');

// startBtn.addEventListener('click', function() {
//   clearInterval(countdown); // Clear any existing countdown
//   timeLeft = 10;
//   timerDisplay.textContent = timeLeft;

//   countdown = setInterval(function() {
//     timeLeft--;
//     timerDisplay.textContent = timeLeft;

//     if (timeLeft <= 0) {
//       clearInterval(countdown);
//       timerDisplay.textContent = "Time's up!";
//     }
//   }, 1000);
// });



// let countdown;
// let timeLeft = 10; // starting time in seconds

// const timerDisplay = document.getElementById('timer');
// const startBtn = document.getElementById('startBtn');
// const circle = document.querySelector('.circle');

// startBtn.addEventListener('click', function() {
//   clearInterval(countdown);
//   timeLeft = 10;
//   updateCircle(360);

//   timerDisplay.textContent = timeLeft;

//   countdown = setInterval(function() {
//     timeLeft--;
//     timerDisplay.textContent = timeLeft;
//     updateCircle((timeLeft / 10) * 360);

//     if (timeLeft <= 0) {
//       clearInterval(countdown);
//       timerDisplay.textContent = "🎉";
//       updateCircle(0);
//     }
//   }, 1000);
// });

// function updateCircle(degree) {
//   circle.style.background = `conic-gradient(#00c6ff ${degree}deg, #eee ${degree}deg)`;
// }






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
