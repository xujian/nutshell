<template>
  <h1 class="my-lg">数据表格 &lt;ns-table&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" align="center">
    <complex-table />
  </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { variants } from '../../props'

const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map(d => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
})
</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>