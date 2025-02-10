<template>
  <ns-page class="facts-page">
    <ns-page-content>
      <h1>详表</h1>
      <p class="caption">&lt;ns-facts&gt;</p>
      <mobile-button url="pages/components/facts/facts" />
      <p>&nbsp;</p>
      <note>成组展示多个只读字段，常见于详情页的信息展示。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story minimal file="facts/basic.vue" />
      <p>&nbsp;</p>
      <h2>排列</h2>
      <story minimal file="facts/column.vue" />
      <p>&nbsp;</p>
      <h2>使用 slot</h2>
      <p>&nbsp;</p>
      <story minimal file="facts/slot.vue" />
      <h2>使用 ns-facts-item</h2>
      <p>&nbsp;</p>
      <story minimal file="facts/items.vue" />
      <h2>变体 Variants</h2>
      <p>&nbsp;</p>
      <story minimal file="facts/variants.vue" />
      <h2>竖排 vertical</h2>
      <p>&nbsp;</p>
      <story minimal file="facts/vertical.vue" />
      <h2>样式配置 fill</h2>
      <p>&nbsp;</p>
      <story minimal file="facts/style.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'


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
