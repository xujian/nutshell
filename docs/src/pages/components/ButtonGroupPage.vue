<template>
  <h1 class="my-lg">按钮组</h1>
  <story file="button-group/basic" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Size</h2>
  <ns-row>
    <ns-button color="primary" v-for="size in sizes" :key="size" :label="size" :size="size"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Color</h2>
  <ns-row>
    <ns-button v-for="color in colors" :color="color" :label="color" :key="color"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-button v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color"
      :variant="variant" label="创建订单"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
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
