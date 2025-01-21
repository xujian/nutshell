<template>
  <ns-page>
    <ns-page-header title="按钮"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h2>Color</h2>
      <color-cases class="breakout" v-slot="{color}">
        <ns-chip
          :color
          label="确定" />
      </color-cases>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="breakout column">
        <ns-chip v-for="(color) in colors"
          :key="color"
          :color
          :variant label="创建订单" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>可关闭</h2>
      <ns-chip
        color="primary"
        closable
        label="确定" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell/taro'
const colors = brands.slice(0, 3)
</script>

