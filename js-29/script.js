let timeLeft = document.querySelector('.display__time-left');
let endTime = document.querySelector('.display__end-time');
let minuteInput = document.querySelector('form[id="custom"]');
let buttonPressedDate;

function formatSecondOrMinuteText(text) {
    return ("0" + text).slice(-2);
}

minuteInput.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(minuteInput);
    startTimer(minuteInput.querySelector('input[name="minutes"]').value * 60);
});

document.querySelectorAll('.timer__button').forEach(
    (button) => button.addEventListener('click', () => {
        startTimer(button.dataset.time)
    })
);

setInterval(function() {
    if (buttonPressedDate == undefined) return;

    let secondsLeft = Math.round((buttonPressedDate - Date.now()) / 1000);

    if (secondsLeft < 0) return;

    let min = Math.floor(secondsLeft / 60);
    let sec = Math.round(secondsLeft % 60);

    timeLeft.textContent = formatSecondOrMinuteText(min) + ":" + formatSecondOrMinuteText(sec);
}, 1000);

function startTimer(seconds) {
    buttonPressedDate = Date.now() + Number(seconds) * 1000;
    let currentTime = new Date(buttonPressedDate);
    endTime.textContent = "Be back at " + formatSecondOrMinuteText(currentTime.getHours()) + ":" + formatSecondOrMinuteText(currentTime.getMinutes());  
}