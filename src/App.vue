<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

  onMounted(() => {
    window.addEventListener('resize', () => {
      updateDiagValue();
    });

    updateDiagValue();
  });

  const updateDiagValue = () => {
    var diagonale = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)).toFixed(2);
    document.body.style.setProperty('--diag', `${diagonale}px`);
  }
</script>

<style lang="scss">

html {
  background-color: #3c13a4;
  background-image: url('@/assets/wallpaper.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>
