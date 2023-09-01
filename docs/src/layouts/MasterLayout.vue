<script lang="ts" setup>
import { ref } from 'vue'
import AppNav from './AppNav.vue'
import AppHeader from './AppHeader.vue'

const navOpen = ref(true)

const toggleNav = () => {
  navOpen.value = !navOpen.value
}
</script>
<template>
  <div class="app-layout grid master-layout">
    <nav class="app-nav">
      <app-nav></app-nav>
    </nav>
    <header class="app-header">
      <app-header></app-header>
    </header>
    <section role="main" class="app-main">
      <router-view />
    </section>
    <footer class="app-footer">Footer</footer>
    <aside class="app-drawer">Drawer</aside>
  </div>
</template>
<style lang="scss">
.app-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 64px 1fr 200px;
  min-height: 100vh;
  margin: 0;
  grid-template-areas: 
    "nav header"
    "nav main"
    "nav footer";
  .app-nav {
    grid-area: nav;
    display: flex;
  }
  .app-header {
    grid-area: header;
  }
  .app-main {
    grid-area: main;
    padding: 10px;
  }
  .app-footer {
    grid-area: footer;
  }
  .app-drawer {
    position: fixed;
    width: 400px;
    height: 100vh;
    background-color: blue;
    right: 0;
    transform: translate3d(400px, 0, 0);
  }
}
@media screen and (max-width: 475px) {
  .app-layout {
    grid-template-areas: 
      "header"
      "main"
      "footer";
    .app-nav {
      position: fixed;
      height: 100vh;
      left: 0;
      transform: translate3d(-200px, 0, 0);
    }
  }
}
</style>