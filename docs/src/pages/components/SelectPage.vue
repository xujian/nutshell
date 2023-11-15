<template>
  <h1 class="my-lg">下拉选框 &lt;ns-select&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-card>
    <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
      <h4 class="variant-label">{{ variant }}</h4>
      <ns-select
        v-model="value"
        :options="cities"
        :name="`client-variant-${variant}`"
        :key="'primary'"
        :color="'primary'" 
        :variant="variant" label="创建订单"></ns-select>
    </ns-row>
  </ns-card>
  <p>&nbsp;</p>
  <h2>多项选择</h2>
  <p>&nbsp;</p>
  <ns-card>
    <ns-row>
      <ns-multiple-select
        v-model="multipleValue"
        :options="cities"
        :key="'primary'"
        :color="'primary'" 
        label="客户区域"></ns-multiple-select>
    </ns-row>
  </ns-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { variants } from '../../props'

const value = ref('')
const multipleValue = ref([])

const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map((d: any) => ({value: d.id, label: d.name})))
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