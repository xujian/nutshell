<template>
  <div class="page card-page">
    <h1 class="my-lg">卡片 &lt;ns-card&gt;</h1>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>卡片橱窗</h2>
    <p>&nbsp;</p>
    <story is-plain file="card/showcase" />
    <h2 class="my-md">Colors</h2>
    <ns-row class="colors" :gap="10">
      <ns-card v-for="color in colors"
        title="卡片"
        :fill="color"
        :key="color"></ns-card>
    </ns-row>
    <h2 class="my-md">Variants</h2>
    <ns-row class="variants" align="center" :gap="10" justify="start">
      <ns-card class="my-xs"
        v-for="(variant) in variants"
        :key="variant"
        :title="variant"
        :color="'#999'"
        :variant="variant" label="创建订单"></ns-card>
      </ns-row>
      <p>&nbsp;</p>
      <h2>支持渐变</h2>
      <story is-plain file="card/gradients" />
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
