let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
hours = updateTime(hours);
minutes = updateTime(minutes);
seconds = updateTime(seconds);
document.getElementById("clock").innerText = hours + " : " + minutes + " : " + seconds;
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
setTimeout(function () {
    location.reload();
}, 1000);
