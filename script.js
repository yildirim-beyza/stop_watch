const btnStart = document.getElementById('btn-start'), 
    btnStop = document.getElementById('btn-stop'), 
    btnReset = document.getElementById('btn-reset')

let hours = document.getElementById('hours'), 
    minutes = document.getElementById('minutes'), 
    seconds = document.getElementById('seconds'),
    centiseconds = document.getElementById('centiseconds'), 
    myInterval,
    centisec = 0, 
    sec = 0,
    min = 0, 
    hour = 0

btnStart.addEventListener("click", () => {
    clearInterval(myInterval)
    myInterval = setInterval(setTime, 10);
})

btnStop.addEventListener("click", () => {
    clearInterval(myInterval)
})

btnReset.addEventListener("click", () => {
    clearInterval(myInterval)
    hour = 0
    min = 0
    sec = 0
    centisec = 0
    hours.innerHTML = "00 :"
    minutes.innerHTML = "00 :"
    seconds.innerHTML = "00 :"
    centiseconds.innerHTML = "00"
})


function setTime() {

    centisec++

    if (centisec <= 9) {
        centiseconds.innerHTML = "0" + centisec
    }

    if (centisec > 9 && centisec <= 99) {
        centiseconds.innerHTML = centisec
    }

    if (centisec > 99) {
        sec++
        seconds.innerHTML = "0" + sec + " :"
        centisec = 0
        centiseconds.innerHTML = " 0" + centisec
    }

    if (sec > 9) {
        seconds.innerHTML = sec + " :"
    }

    if (sec > 59) {
        min++
        minutes.innerHTML = "0" + min + " :"
        sec = 0 
        seconds.innerHTML = "0" + sec
    }

    if (min > 9) {
        minutes.innerHTML = min + " :"
    }

    if (min > 59) {
        hour++ 
        hours.innerHTML = "0" + hour + " :"
    }

    if (hour > 9) {
        hours.innerHTML = hour + " :"
    }

}