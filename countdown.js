// Function to update the countdown
function updateCountdown() {
    var target = new Date("Jan 1, 2024 00:00:00").getTime();
    var now = new Date().getTime();
    var difference = target - now;

    var days = Math.floor(difference / (24 * 60 * 60 * 1000));
    var hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((difference % (60 * 1000)) / 1000);

    document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
    document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Calling the function
updateCountdown();

// Updating the countdown every second
setInterval(updateCountdown, 1000);
