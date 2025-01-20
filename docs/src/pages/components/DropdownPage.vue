<template>
  <ns-page class="dropdown-page">
    <ns-page-content>
      <h1 class="my-lg">下拉菜单</h1>
      <p class="caption">&lt;ns-dropdown&gt;</p>
      <mobile-button url="pages/components/dropdown" />
      <p>&nbsp;</p>
      <note>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="dropdown/basic" />
      <p>&nbsp;</p>
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-dropdown
          :items="menuItems"
          label="排序" :fill="color" />
      </color-cases>
      <p>&nbsp;</p>
      <h2 class="my-md">变体 Variant</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-dropdown
          v-for="color in brands"
          :key="color"
          :items="menuItems"
          :fill="color"
          label="排序"
          :variant="variant" />
      </variant-cases>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'

const menuItems = [
  { label: '创建时间', value: 'created-time' },
  { label: '修改时间', value: 'modified-time' },
  { label: '结单时间', value: 'finished-time' },
]
</script>

<style lang="scss">
.dropdown-page {
  .variant-cases {
    .ns-dropdown {
      width: 94px;
    }
  }
}
</style>
