<template>
  <ns-page class="table-page">
    <ns-page-content>
      <h1>数据表格</h1>
      <p class="caption">&lt;ns-table&gt;</p>
      <p>&nbsp;</p>
      <h2>缺省样式</h2>
      <story minimal file="table/basic" />
      <h2>全特性表格</h2>
      <p>&nbsp;</p>
      <story minimal file="table/full-featured" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>外观配置</h2>
      <story minimal file="table/design" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>隐藏列</h2>
      <story minimal file="table/hidden-columns" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>合并单元格</h2>
      <story minimal file="table/merge" />
      <p>&nbsp;</p>
      <h2>单元格内编辑</h2>
      <story minimal file="table/editable" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

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
