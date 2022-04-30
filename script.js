let eventStart = new Date("May 7, 2022 13:00:00").getTime();

function tick () {
    let now = new Date().getTime();
    let t = eventStart - now;
    if (t > 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (days < 10) { days = "0" + days; }
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) { hours = "0" + hours; }
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) { mins = "0" + mins; }
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) { secs = "0" + secs; }
      let time = `${days} : ${hours} : ${mins} : ${secs}`;
      document.querySelector('.countdown').innerText = time;
    }
  }

tick()

let timer = setInterval(tick, 1000);

console.warn("Time is growing near towards the inevitable. You will see soon.")
