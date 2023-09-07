<template>
  <h1 class="my-lg">文本输入框</h1>
  <h2 class="my-md">Size</h2>
    <ns-input color="primary" name="`client-size-${size}`" v-for="size in sizes" :key="size" :label="size" :size="size"></ns-input>
  <h2 class="my-md">Color</h2>
  <ns-input v-for="color in colors" name="`client-color-${color}`" :color="color" :label="color" :key="color"></ns-input>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-input
      :name="`client-variant-${variant}`"
      :key="'primary'"
      :color="'primary'" 
      :variant="variant" label="创建订单"></ns-input>
    </ns-row>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

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