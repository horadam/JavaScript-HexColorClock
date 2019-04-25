var hexColor = document.getElementById('hexColor')

function hexClock () {
    var time = new Date();
    var hours = time.getHours().toString();
    mins = time.getMinutes().toString();
    secs = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = `0${hours}`
    }

    if (mins.length < 2) {
        mins = `0${mins}`
    }

    if (secs.length < 2) {
        secs = `0${secs}`
    }

var hexColorString = `#${hours}${mins}${secs}`
hexColor.innerHTML = hexColorString

document.body.style.backgroundColor = hexColorString
}

hexClock();
setInterval(hexClock, 1000);