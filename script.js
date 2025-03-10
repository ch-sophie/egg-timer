let timer;
let timeRemaining = 0;
const sound = document.getElementById("notification-sound");
const timerDisplay = document.getElementById("timerDisplay");

function startTimer(duration) {
    timeRemaining = duration;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(timer);
        timerDisplay.innerText = "Time's up, your eggs are done!";
        sound.play();
        return;
    }
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.innerText = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = 0;
    timerDisplay.innerText = "00:00";
    if (typeof sound !== 'undefined') {
        sound.pause();
        sound.currentTime = 0;
    }
}