<template>
  <h1 class="my-lg">下拉菜单 &lt;ns-dropdown&gt;</h1>
  <h2 class="my-md">Size</h2>
  <ns-row class="sizes">
    <ns-dropdown
      v-for="size in sizes" :key="size"
      :items="menuItems"
      label="排序" :size="size"></ns-dropdown>
  </ns-row>
  <h2 class="my-md">Color</h2>
  <ns-row class="colors">
    <ns-dropdown v-for="color in colors" :color="color"
      :items="menuItems"
      label="排序" :key="color"></ns-dropdown>
  </ns-row>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-dropdown v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color"
      :items="menuItems"
      :variant="variant" label="排序"></ns-dropdown>
    </ns-row>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

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
