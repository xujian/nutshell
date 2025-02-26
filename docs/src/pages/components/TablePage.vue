<template>
  <ns-page class="table-page">
    <ns-page-content>
      <h1>数据表格</h1>
      <p class="caption">&lt;ns-table&gt;</p>
      <p>&nbsp;</p>
      <note>用于展示基础表格</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">rows - 表格数据，paging - 分页数据，@pageChange - 分页改变时的事件</div>
      <story file="table/basic" />
      <p>&nbsp;</p>
      <h2>全特性表格</h2>
      <div class="caption">表格列包含以下 - ns-table-column-checkbox:复选框选择列; ns-table-column-number:序号列; ns-table-column:普通列; ns-table-column-crypto:数据脱敏列; ns-table-column-icon:图标列; ns-table-column-button:按钮列; ns-table-column-rating:评分列; ns-table-column-chips:标签组列; ns-table-column-chip:单个标签列; ns-table-column-datetime:时间列; ns-table-column-custom:自定义列; ns-table-column-currency:金额列; ns-table-column-link:可链接列</div>
      <div class="caption" style="margin-top: -10px; margin-bottom: 10px;">列表的属性有以下 - filed:字段属性; label:标题; width:宽度; align:对齐方式; fixed: 定位方式</div>
      <div class="caption" style="margin-bottom: 15px;">hasPagination - 是否显示分页；loading - 是否加载中；hasColumnControl - 是否显示表格列表可见控制器；rowHeight - 单元格高度；headerHeight - 头高度；cacheColumns - 数据是否缓存到local</div>
      <story file="table/full-featured" />
      <p>&nbsp;</p>
      <h2>外观配置</h2>
      <div class="caption">fill - 背景色; borders - 边框显示方式; foreground - 单元格文字颜色；stroke - 边框颜色；round - 是否圆角；headerColor - 头部单元格文字颜色</div>
      <story file="table/design" />
      <p>&nbsp;</p>
      <h2>隐藏列</h2>
      <div class="caption">hiddenColumns - 可动态隐藏的列表，接收一个数组</div>
      <story file="table/hidden-columns" />
      <p>&nbsp;</p>
      <h2>合并单元格</h2>
      <div class="caption">mergingColumns - 可合并的列表；mergingMaster - 按主列合并；rowHoverable - 为false时，悬浮无颜色变化</div>
      <story file="table/merge" />
      <p>&nbsp;</p>
      <h2>单元格内编辑</h2>
      <div class="caption">列表组件设置editable，则该列表可编辑，可设置可编辑的组件形式，如editable=number-input/editable="{
        component: 'select',
        options: 科目类型表,
        onChange: onKemuChange
      }"</div>
      <story file="table/editable" />
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
