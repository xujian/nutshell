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
      <div class="caption">items - 详表项，格式为[{label: string, value: string}]</div>
      <story file="facts/basic.vue" />
      <p>&nbsp;</p>
      <h2>排列</h2>
      <div class="caption">direction=column，label与content占满一行展示，描述项呈现垂直方向排列</div>
      <story file="facts/column.vue" />
      <p>&nbsp;</p>
      <h2>使用 slot</h2>
      <div class="caption">slot=item，可自定义content的内容</div>
      <story file="facts/slot.vue" />
      <p>&nbsp;</p>
      <h2>使用 ns-facts-item</h2>
      <div class="caption">ns-facts/ns-facts-item配合使用</div>
      <story file="facts/items.vue" />
      <p>&nbsp;</p>
      <h2>竖排 vertical</h2>
      <div class="caption">vertical=true，label与content垂直方向展示</div>
      <story file="facts/vertical.vue" />
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <story file="facts/variants.vue" />
      <p>&nbsp;</p>
      <h2>样式配置 fill</h2>
      <div class="caption">fill可调整背景色</div>
      <story file="facts/style.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">

</style>
