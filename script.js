let timer;
let timeRemaining = 0;
const sound = document.getElementById("notification-sound");

function startTimer(duration) {
    timeRemaining = duration;
    clearInterval(timer);
    document.getElementById("timerDisplay").style.display = "block";
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("timerDisplay").innerText = "Time's up, your eggs are done!";
        sound.play();
        return;
    }
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timerDisplay").innerText = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = 0;
    document.getElementById("timerDisplay").innerText = "00:00";
    if (typeof sound !== 'undefined') {
        sound.pause();
        sound.currentTime = 0;
    }
}