<template>
  <h1 class="my-lg">数据表格 &lt;ns-table&gt;</h1>
  <p>&nbsp;</p>
  <h3>缺省样式</h3>
  <p>&nbsp;</p>
  <story minimal file="table/basic" />
  <h3>全特性表格</h3>
  <p>&nbsp;</p>
  <story minimal file="table/full-featured" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>外观配置</h3>
  <p>&nbsp;</p>
  <story minimal file="table/design" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>隐藏列</h3>
  <p>&nbsp;</p>
  <story minimal file="table/hidden-columns" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>合并单元格</h3>
  <p>&nbsp;</p>
  <story minimal file="table/merge" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>单元格内编辑</h3>
  <p>&nbsp;</p>
  <story minimal file="table/editable" />
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
