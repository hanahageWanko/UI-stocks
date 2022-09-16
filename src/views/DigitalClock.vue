<template>
  <div class="body">
    <div id="time">
      <div class="circle" style="--clr: #ff2972">
        <div class="dots hr_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="hh"></circle>
        </svg>
        <div id="hours">00</div>
      </div>
      <div class="circle" style="--clr: #fee800">
        <div class="dots min_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm"></circle>
        </svg>
        <div id="minutes">00</div>
      </div>
      <div class="circle" style="--clr: #04fc43">
        <div class="dots sec_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div id="seconds">00</div>
      </div>
      <div class="ap">
        <div id="ampm">AM</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) h = h - 12;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family 'Poppins', sans-serif; */
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2f363e;
}

#time {
  display: flex;
  gap: 40px;
  color: #fff;
}

#time .circle {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#time .circle svg {
  position: relative;
  width: 150px;
  height: 150px;
  transform: rotate(270deg);
}

#time .circle svg circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: #191919;
  stroke-width: 4;
  transform: translate(5px, 5px);
}

#time .circle svg circle:last-of-type {
  stroke: var(--clr);
  stroke-dasharray: 440;
}

#time div {
  position: absolute;
  text-align: center;
  font-weight: 500;
  font-size: 1.2em;
}

#time div span {
  position: absolute;
  transform: translateX(-50%) translateY(-10px);
  font-size: 70%;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

#time .ap {
  position: relative;
  font: 1em;
  transform: translateX(-20px);
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flexl-start;
}

.dots::before {
  content: "";
  position: absolute;
  top: -3px;
  width: 15px;
  height: 15px;
  background: var(--clr);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
}
</style>
