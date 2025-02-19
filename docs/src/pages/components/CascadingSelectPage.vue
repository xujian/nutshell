<template>
  <ns-page>
    <ns-page-content>
      <h1>级联下拉选框</h1>
      <p class="caption">&lt;ns-cascading-select&gt;</p>
      <p>&nbsp;</p>
      <note>级联选择框，需要从一组相关联的数据集合进行选择</note>
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}">
        <ns-cascading-select
          :options="cities"
          v-model="value"
          placeholder="请选择区域"
          :variant="variant"
          label="选择区域" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">可搜索 - searchable设为true；不可清除选择 - clearable设为false；禁用输入框 - disabled需设为true</div>
      <story file="select/cascader.vue" />
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
