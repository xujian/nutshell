<template>
  <ns-page>
    <ns-page-content>
      <h1 class="my-lg">下拉选框</h1>
      <p class="caption">&lt;ns-select&gt;</p>
      <mobile-button url="pages/components/select" />
      <p>&nbsp;</p>
      <note>提供多个选项集合供用户选择</note>
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-select
          v-model="value"
          :options="cities"
          :name="`client-variant-${variant}`"
          :variant="variant" label="创建订单" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>多项选择</h2>
      <ns-multiple-select
        v-model="multipleValue"
        :options="cities"
        :key="'primary'"
        :color="'primary'"
        label="客户区域"></ns-multiple-select>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

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
