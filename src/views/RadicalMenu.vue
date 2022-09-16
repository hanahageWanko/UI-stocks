<template>
  <div class="body">
    <ul class="menu" :class="{ active: active }">
      <div class="toggle" @click="toggleMenu">+</div>
      <li style="--i: 0; --clr: #ff2972">
        <a href="#" class="icon"
          ><img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 1; --clr: #fee800">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 2; --clr: #04fc43">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 3; --clr: #fe00f1">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 4; --clr: #00b0fe">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 5; --clr: #fea600">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 6; --clr: #a529ff">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
      <li style="--i: 7; --clr: #01bdab">
        <a href="#" class="icon">
          <img src="@/assets/images/radical-menu-icon.svg" alt="item"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";

let active: Ref<Boolean> = ref(false);

const toggleMenu = () => {
  active.value = !active.value;
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2f363e;
}

.menu {
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu li {
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--i));
  transform-origin: 140px;
  transform: rotate(0deg) translateX(110px);
  color: #fff;
}

.menu.active li {
  transform: rotate(calc(360deg / 8 * var(--i))) translateX(0px);
}

.menu li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: var(--clr);
  border: 2px solid var(--clr);
  border-radius: 50%;
  font-size: 1.5em;
  transform: rotate(calc(360deg / -8 * var(--i))) translateX(0px);
  transition: 1s;
}

.menu li a:hover {
  transition: 0s;
  background: var(--clr);
  color: #333;
  box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr), 0 0 50px var(--clr);
}

.menu .toggle {
  position: absolute;
  width: 60px;
  height: 60px;
  color: #fff;
  line-height: 0;
  font-family: monospace;
  background: #2f363e;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  font-size: 2em;
  transition: transform 1.25s;
}

.menu.active .toggle {
  transform: rotate(315deg);
}

img {
  width: 35px;
  height: auto;
}
</style>
