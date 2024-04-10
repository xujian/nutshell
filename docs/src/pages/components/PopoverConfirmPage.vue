<template>
  <h1 class="my-lg">气泡确认框 ns-popover-confirm</h1>
  <h4 class="my-lg">基本用法</h4>
  <ns-popover-confirm v-model="popover" title="标题" content="描述内容">
    气泡确认框
  </ns-popover-confirm>

  <h2 class="my-md">Color</h2>
  <ns-row>
    <ns-popover-confirm v-for="(color, key) in colors" :key="key" :color="color" v-model="popoverState[key]" title="标题" content="描述内容">
     <span style="padding: 10px;">{{color}}</span>
    </ns-popover-confirm>
  </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colors } from '../../props'

const popover = ref(false)
const popoverState = ref([])
colors.forEach(i => {
  popoverState[i] = false
})

</script>

<style lang="scss">
</style>
