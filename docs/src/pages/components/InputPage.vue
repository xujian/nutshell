<template>
  <h1 class="my-lg">文本输入框</h1>
<h2 class="my-md">Color</h2>
  <ns-card fill="#fff">
    <ns-input v-for="color in colors"
      name="`client-color-${color}`"
      :color="color"
      :label="color"
      :key="color"></ns-input>
  </ns-card>
  <h2 class="my-md">Variants</h2>
  <ns-card fill="#fff">
    <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
      <h4 class="variant-label">{{ variant }}</h4>
      <ns-input
        :name="`client-variant-${variant}`"
        :key="'primary'"
        :color="'primary'"
        :variant="variant" label="创建订单"></ns-input>
    </ns-row>
  </ns-card>
  <p>&nbsp;</p>
  <ns-card fill="#fff" title="特殊输入框">
    <ns-search-input name="q" placeholder="搜索" />
  </ns-card>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>使用 SLOTS</h2>
  <p>&nbsp;</p>
  <story file="input/slots" />
</template>

<script lang="ts" setup>
import { colors, variants } from '../../props'

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
