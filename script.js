let timer;
let timeRemaining = 0;

function startTimer(duration) {
    timeRemaining = duration;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("timerDisplay").innerText = "Time's up!";
        const notificationSound = document.getElementById("notification-sound");
        const notificationSoundContinue = document.getElementById("notification-sound-continue");
        notificationSound.play();
        notificationSoundContinue.play();
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
}