<template>
  <a href="javascript:void(0);" class="hamberger" @click="onHambergerClick">
    <i class="fi fi-rr-menu-burger"></i>
  </a>
  <h1>Nutshell</h1>
  <div class="spacer"></div>
  <ns-dropdown class="theme-dropdown" label="配色主题"
    :items="[
      { label: 'Klein', value: 'klein' },
      { label: 'Present', value: 'present' },
    ]"/>
</template>
<script lang="ts" setup>
import { useNutshell, useBus } from 'nutshell'
const $bus = useBus()
const onHambergerClick = () => {
  $bus.emit('nav.hide')
}
</script>
<style lang="scss">
.app-header {
  .hamberger {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  h1 {
    font-size: 16px;
    line-height: 48px;
    margin: 0;
    cursor: default;
  }
  .theme-dropdown {
    padding-right: 1em;
  }
}
</style>