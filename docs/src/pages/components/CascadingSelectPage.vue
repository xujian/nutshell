<template>
  <ns-page>
    <ns-page-content>
      <h1>级联下拉选框</h1>
      <p class="caption">&lt;ns-cascading-select&gt;</p>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-cascading-select
          :options="cities"
          v-model="value"
          :variant="variant"
          label="选择区域" />
      </variant-cases>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const value = ref([])
const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/locations.json')
    .then(response => response.data)
    .then(data => {
      cities.value = data
    })
})
</script>

<style lang="scss">
.variants {
  .variant-label {
    padding-top: 8px;
    width: 100px
  }
}
</style>
