<template>
  <a href="javascript:void(0);" class="hamberger" @click="onHambergerClick">
    <i class="fi fi-rr-menu-burger"></i>
  </a>
  <h1>Nutshell</h1>
  <div class="spacer"></div>
  <ns-dropdown class="theme-dropdown" label="配色主题"
    @change="onDropdownChange"
    :items="[
      { label: 'Klein', value: 'klein' },
      { label: 'Gunmetal', value: 'gunmetal' },
      { label: 'Valentine', value: 'valentine' },
      { label: 'Present', value: 'present' },
    ]"/>
</template>
<script lang="ts" setup>
import { useBus } from '@uxda/nutshell'
const $bus = useBus()
const onHambergerClick = () => {
  $bus.emit('nav:hide')
}
const onDropdownChange = (item: any) => {
  $bus.emit('theme:change', item.key)
}
</script>
<style lang="scss">
.app-header {
  background-color: var(--ns-header-background, transparent);
  .hamberger {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  h1 {
    font-size: 16px;
    line-height: 48px;
    cursor: default;
  }
  .theme-dropdown {
    padding-right: 1em;
  }
}
</style>