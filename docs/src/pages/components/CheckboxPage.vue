<template>
  <h1 class="my-lg">复选框 &lt;ns-checkbox&gt;</h1>
  <h2 class="my-md">Size</h2>
  <ns-row class="sizes">
    <ns-checkbox s color="primary"
      v-for="size in sizes" :key="size"
      v-model="checked"
      :label="label" :size="size"></ns-checkbox>
  </ns-row>
  <h2 class="my-md">Color</h2>
  <ns-row class="colors">
    <ns-checkbox v-for="color in colors" :color="color"
      v-model="checked"
      :label="label" :key="color"></ns-checkbox>
  </ns-row>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-checkbox v-for="(color) in colors" class="my-xs"
      :key="color"
      v-model="checked"
      :color="color"
      :variant="variant" :label="label"></ns-checkbox>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>复选框组</h3>
  <p>&nbsp;</p>
  <story file="checkbox/group" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colors, sizes, variants } from '../../props'

const label = '受限用户',
  checked = ref(false)

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
