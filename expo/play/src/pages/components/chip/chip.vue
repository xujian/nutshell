<template>
  <ns-page>
    <ns-page-header title="Chip"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h2>Color</h2>
      <color-cases class="breakout" v-slot="{color}">
        <ns-chip
          :color
          label="消耗" />
      </color-cases>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="breakout column">
        <ns-chip v-for="(color) in colors"
          :key="color"
          :color
          :variant label="收益" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>R角</h2>
      <ns-row :gap="4">
        <ns-chip v-for="(color) in colors"
          :key="color"
          :color
          round label="收益" />
      </ns-row>
      <code-view :code="codes[0]" language="html" />
      <p>&nbsp;</p>
      <h2>可关闭</h2>
      <ns-chip
        color="primary"
        closable
        label="经营企业" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell/taro'
const colors = brands.slice(0, 3)

const codes = [
`<ns-chip v-for="(color) in colors"
  :key="color"
  :color
  round label="收益" />`
]
</script>

