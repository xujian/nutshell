<template>
  <ns-page class="button-group-page">
    <ns-page-content>
      <h1>按钮组</h1>
      <p class="caption">&lt;ns-button-group&gt;</p>
      <mobile-button url="pages/components/button-group" />
      <p>&nbsp;</p>
      <note>用于将一系列按钮组合在一起,形成一个整体的视觉</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="button-group/basic" />
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{size}">
        <ns-button-group v-model="state.selected" color="primary" :size :items />
      </size-cases>
      <p>&nbsp;</p>
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-button-group v-model="state.selected" :color :items size="xs" />
      </color-cases>
      <p>&nbsp;</p>
      <h2>变体 Variant</h2>
      <variant-cases v-slot="{variant}">
        <ns-button-group v-model="state.selected" color="primary" :variant :items size="xs" />
      </variant-cases>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  selected: '1'
})
const items = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]
</script>

<style lang="scss">
.button-group-page {
  .variants {
    .ns-button {
      margin: 2px
    }
    .variant-label {
      width: 100px
    }
  }
}
</style>
