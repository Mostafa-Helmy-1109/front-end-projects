function formatTime(value) {
    return value < 10 ? "0" + Math.floor(value) : Math.floor(value);
}

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let target = new Date("Dec, 31 2026").getTime();

const timer = setInterval(() => {
    let now = new Date().getTime();
    let secondasValue = (target - now) / 1000;

    if (secondasValue <= 0) {
        clearInterval(timer);
        return;
    }

    let daysValue = secondasValue / 86400;
    let hoursValue = (secondasValue % 86400) / 3600;
    let minutesValue = (secondasValue % 86400 % 3600) / 60;
    let actualSeconds = secondasValue % 86400 % 3600 % 60;

    days.innerHTML = formatTime(daysValue);
    hours.innerHTML = formatTime(hoursValue);
    minutes.innerHTML = formatTime(minutesValue);
    seconds.innerHTML = formatTime(actualSeconds);
}, 1000);
