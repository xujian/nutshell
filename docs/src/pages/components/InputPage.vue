<template>
  <ns-page>
    <ns-page-content>
      <h1 class="my-lg">文本输入框</h1>
      <p class="caption">&lt;ns-input&gt;</p>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-input
          name="input"
          color="'primary'"
          :variant="variant" label="创建订单" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>特殊输入框</h2>
      <story file="input/special" />
      <p>&nbsp;</p>
      <h2>使用 SLOTS</h2>
      <p>&nbsp;</p>
      <story file="input/slots" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, variants } from '@uxda/nutshell'

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
