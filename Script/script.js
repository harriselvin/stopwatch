let displayTime = document.querySelector('p')
let end = document.querySelector('.bi-stop-circle')
let play = document.querySelector('.bi-play-circle-fill')
let reset = document.querySelector('.bi-arrow-repeat')

let [seconds, minutes, hours] = [0,0,0];
let timer = null

play.addEventListener('click', watchStart)

reset.addEventListener('click', Reset)

end.addEventListener('click', Stop)

function stopwatch() {
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++
    if(minutes == 60) {
      minutes = 60;
      hours++
    }
  }

  let h = hours < 10 ? "0" + hours : hours
  let m = minutes < 10 ? "0" + minutes : minutes
  let s = seconds < 10 ? "0" + seconds : seconds

  displayTime.innerHTML = h + ":" + m + ":" + s
}

function watchStart() {
  if(timer !== null) {
    clearInterval(timer)
  }
  timer = setInterval(stopwatch, 1000)
}

function Reset() {
  [seconds, minutes, hours] = [0,0,0]
  displayTime.innerHTML = "00:00:00"
  clearInterval(timer)
}

function Stop() {
  clearInterval(timer)
}