<template>
  <h1 class="my-lg">气泡确认框 ns-popover-confirm</h1>
  <h4 class="my-lg">基本用法</h4>
  <ns-button label="气泡确认框">
    <ns-popover-confirm title="提示"
      @ok="ok"
      @cancel="cancel">
      是否禁用?
      </ns-popover-confirm>
  </ns-button>

  <h4 class="my-lg">trigger mouseenter</h4>
  <ns-button label="气泡确认框">
    <ns-popover-confirm v-model="showPopover" title="提示" trigger="mouseenter"
      @ok="ok">
      是否禁用?
      </ns-popover-confirm>
  </ns-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showPopover = ref(false)

const ok = () => {
  console.log('===popover confirm ok')
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 1000);
  });
}

const cancel = () => {
  console.log('===popover confirm cancel')
}

</script>

<style lang="scss">
</style>
