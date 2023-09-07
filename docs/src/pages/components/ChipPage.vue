<template>
  <h1 class="my-lg">标签 &lt;ns-chip&gt;</h1>
  <h2 class="my-md">Size</h2>
  <ns-row class="sizes">
    <ns-chip color="primary" v-for="size in sizes" :key="size" :label="size" :size="size"></ns-chip>
  </ns-row>
  <h2 class="my-md">Color</h2>
  <ns-row class="colors">
    <ns-chip v-for="color in colors" :color="color" :label="color" :key="color"></ns-chip>
  </ns-row>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-chip v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color" 
      :variant="variant" label="线索"></ns-chip>
    </ns-row>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

const label = '标签'

</script>

<style lang="scss">
.variants, .colors, .sizes {
  .ns-chip {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>