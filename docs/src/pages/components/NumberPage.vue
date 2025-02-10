<template>
  <ns-page class="number-page">
    <ns-page-content>
      <h1>数字</h1>
      <p class="caption">&lt;ns-number&gt;</p>
      <mobile-button url="pages/components/number" />
      <p>&nbsp;</p>
      <note>特殊数字展示卡片</note>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story minimal file="number/basic.vue" />
      <p>&nbsp;</p>
      <h2>Variant</h2>
      <variant-cases direction="column" v-slot="{variant}">
        <ns-number
          suffix="亿元"
          justify="center"
          :variant
          :value="number" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>Size</h2>
      <size-cases direction="column" v-slot="{size}">
        <ns-number
          suffix="亿元"
          justify="center"
          :size
          :value="number" />
      </size-cases>
      <p>&nbsp;</p>
      <h2>对齐方式</h2>
      <story minimal file="number/justify.vue" />
      <p>&nbsp;</p>
      <h2>百分比与箭头</h2>
      <story minimal file="number/arrow.vue" />
      <p>&nbsp;</p>
      <h2>高级用法</h2>
      <story minimal file="number/full.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const number = 1024.00
</script>

<style lang="scss">
</style>
