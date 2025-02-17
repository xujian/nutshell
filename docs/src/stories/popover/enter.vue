<template>
  <ns-row justify="start">
    <ns-button color="primary" label="hover确认框">
      <ns-popover-confirm v-model="popoverOpen"
        title="提示"
        trigger="mouseenter"
        @ok="ok">是否禁用?
        </ns-popover-confirm>
    </ns-button>
    <ns-button color="primary" label="click确认框">
      <ns-popover-confirm v-model="popoverOpen1"
        title="提示"
        trigger="click"
        @ok="ok">是否禁用?
        </ns-popover-confirm>
    </ns-button>
  </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const popoverOpen = ref(false)
const popoverOpen1 = ref(false)

const ok = () => {
  console.log('===popover confirm ok')
}

const cancel = () => {
  console.log('===popover confirm cancel')
}
</script>
