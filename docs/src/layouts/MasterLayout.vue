<script lang="ts" setup>
import { ref } from 'vue'
import AppNav from './AppNav.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

const navOpen = ref(true)

const toggleNav = () => {
  navOpen.value = !navOpen.value
}
</script>
<template>
  <div class="app-layout grid master-layout">
    <nav class="app-nav flex flex-column align-center">
      <app-nav></app-nav>
    </nav>
    <header class="app-header flex flex row align-center align-around">
      <app-header></app-header>
    </header>
    <section role="main" class="app-main p-lg">
      <router-view />
    </section>
    <footer class="app-footer align-end">
      <app-footer></app-footer>
    </footer>
    <aside class="app-drawer">Drawer</aside>
  </div>
</template>
<style lang="scss">
.app-layout {
  --layout-nav-width: 240px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  .app-nav {
    position: fixed;
    width: var(--layout-nav-width);
    will-change: transform;
    transform: translate3d(0, 0, 0);
    transition: transform .5s;
    height: 100vh;
  }
  .app-header {
    position: fixed;
    height: 48px;
    padding-inline: 1em;
    left: var(--layout-nav-width);
    right: 0;
    transition: left .5s;
    z-index: 100;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(11.7px);
  }
  .app-main {
    margin-top: 48px;
    margin-left: var(--layout-nav-width);
    will-change: margin-left;
    transition: margin-left .5s;
    flex-grow: 1;
  }
  .app-footer {
    height: 80px;
    margin-left: var(--layout-nav-width);
    will-change: margin-left;
    transition: margin-left .5s;
    right: 0;
    background-image: url(/images/mountains.svg);
    background-repeat: no-repeat;
    background-position: right bottom;
  }
  .app-drawer {
    position: fixed;
    width: 400px;
    height: 100vh;
    background-color: blue;
    right: 0;
    will-change: transform;
    transform: translate3d(400px, 0, 0);
  }
}
@media screen and (max-width: 639px) {
  .app-layout {
    .app-nav {
      transform: translate3d(calc(var(--layout-nav-width) * -1), 0, 0);
    }
    .app-header {
      left: 0;
    }
    .app-main, .app-footer {
      margin-left: 0;
    }
  }
}
</style>
