<template>
  <h1 class="my-lg">卡片 &lt;ns-card&gt;</h1>
  <h2 class="my-md">Color</h2>
  <ns-col class="colors">
    <ns-card v-for="color in colors" :color="color" :key="color"></ns-card>
  </ns-col>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-card class="my-xs"
      :color="'#999'" 
      :variant="variant" label="创建订单"></ns-card>
    </ns-row>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

const label = '提交'

</script>

<style lang="scss">
.variants, .colors {
  .ns-card {
    width: 200px;
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>