<template>
  <h1 class="my-lg">侧边栏 &lt;ns-draw&gt;</h1>
  <ns-button label="打开右侧侧边栏" @click="openDrawer" />
  <ns-drawer v-model="drawOpen">
    <h3>侧边栏</h3>
  </ns-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawOpen = ref<boolean>(false)

const openDrawer = () => {
  drawOpen.value = true
}

</script>

<style lang="scss">
</style>