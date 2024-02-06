<template>
  <div class="home-page">

    <h1>Home1</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useTabbar } from '@uxda/appkit-next'

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('home')
})
</script>

<style lang="scss">

</style>
