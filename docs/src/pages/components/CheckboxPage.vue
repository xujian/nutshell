<template>
  <ns-page class="checkbox-page">
    <ns-page-content>
      <h1 class="my-lg">复选框</h1>
      <p class="caption">&lt;ns-checkbox&gt;/&lt;ns-checkbox-group&gt;</p>
      <mobile-button url="pages/components/checkbox" />
      <p>&nbsp;</p>
      <note>在一组可选项中进行多项选择时</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p class="caption">ns-checkbox；disabled设置其禁用状态</p>
      <story file="checkbox/base" />
      <p>&nbsp;</p>
      <h2>复选框组</h2>
      <p class="caption">使用options属性呈现选择项，disabled可控制某个选项禁用状态</p>
      <story file="checkbox/group" />
      <p>&nbsp;</p>
      <h2>方向与禁用状态</h2>
      <p class="caption">direction设为column选项垂直排列；ns-checkbox-group组件设置disabled属性可实现整个组件禁用</p>
      <story file="checkbox/direction" />
    </ns-page-content>
  M</ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style lang="scss">
.sizes,
.colors,
.variants {
  .ns-checkbox {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
