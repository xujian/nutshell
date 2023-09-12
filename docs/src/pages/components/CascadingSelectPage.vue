<template>
  <h1 class="my-lg">级联下拉选框 &lt;ns-cascading-select&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-cascading-select
      :options="cities"
      v-model="value"
      :name="`client-variant-${variant}`"
      :key="'primary'"
      :color="'primary'" 
      :variant="variant" label="创建订单"></ns-cascading-select>
    </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { variants } from '../../props'

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