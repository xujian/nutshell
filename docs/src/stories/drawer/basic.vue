<template>
  <ns-row justify="start">
    <ns-button color="primary" label="打开右侧侧边栏" @click="openDrawer" />
  </ns-row>

  <ns-drawer width="1000" v-model="drawOpen" title="侧边栏">
    内容区域
  </ns-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawOpen = ref<boolean>(false)

const openDrawer = () => {
  drawOpen.value = true
}

</script>
