<template>
  <ns-page class="dropdown-page">
    <ns-page-content>
      <h1 class="my-lg">下拉菜单</h1>
      <div class="caption">&lt;ns-dropdown&gt;</div>
        <ns-dropdown
          :items="menuItems"
          label="排序" />
      <p>&nbsp;</p>
      <h2>Color</h2>
      <color-cases v-slot="{color}">
        <ns-dropdown
          :items="menuItems"
          label="排序" :fill="color" />
      </color-cases>
      <p>&nbsp;</p>
      <h2 class="my-md">Variants</h2>
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

const label = '提交'

const menuItems = [
      { label: '创建时间', value: 'created-time' },
      { label: '修改时间', value: 'modified-time' },
      { label: '结单时间', value: 'finished-time' },
    ]

</script>

<style lang="scss">
.sizes,
.colors,
.variants {
  .ns-dropdown {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
