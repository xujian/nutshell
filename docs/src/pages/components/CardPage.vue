<template>
  <div class="page card-page">
    <h1 class="my-lg">卡片 &lt;ns-card&gt;</h1>
    <h2 class="my-md">Color</h2>
    <ns-column class="colors">
      <ns-card v-for="color in colors"
        title="卡片"
        :fill="color"
        :key="color"></ns-card>
    </ns-column>
    <h2 class="my-md">Variants</h2>
    <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
      <h4 class="variant-label">{{ variant }}</h4>
      <ns-card class="my-xs"
        :color="'#999'"
        :variant="variant" label="创建订单"></ns-card>
      </ns-row>
      <p>&nbsp;</p>
      <h2>支持渐变</h2>
      <story file="card/gradients" />
    </div>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

const label = '提交'

</script>

<style lang="scss">
.card-page {
  .ns-card {
    min-height: 160px;
    margin: 20px 0;
  }
  .variants, .colors {
    .ns-card {
      width: 200px;
    }
    .variant-label {
      width: 100px
    }
  }
  .story-card {
    .ns-card {
      margin: 0 10px;
      min-width: 20%;
    }
  }
}
</style>
