<template>
  <ns-page>
    <ns-page-header title="按钮"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h2>Size</h2>
      <size-cases class="breakout" v-slot="{size}">
        <ns-button color="primary"
          class="with-measure measure-height"
          :size label="确定" />
      </size-cases>
      <h2>Color</h2>
      <color-cases class="breakout" v-slot="{color}">
        <ns-button
          :color
          label="确定" />
      </color-cases>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="breakout column">
        <ns-button v-for="(color) in colors"
          :key="color"
          :color
          :variant label="创建订单"></ns-button>
      </variant-cases>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell/taro'
const colors = brands.slice(0, 3)
</script>

