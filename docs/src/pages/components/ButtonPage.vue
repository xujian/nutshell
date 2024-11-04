<template>
  <ns-page class="button-page">
    <ns-page-content>
      <h1 class="my-lg">按钮</h1>
      <story file="button/basic.vue" />
      <!--panel file="forms/tasks.vue" /-->
      <!--board file="contracts/query.vue" /-->
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2 class="my-md">Size</h2>
      <size-cases v-slot="{size}" vertical>
        <ns-button color="primary"
          class="with-measure measure-height"
          :size label="确定" />
      </size-cases>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2 class="my-md">Color</h2>
      <color-cases v-slot="{color}" vertical>
        <ns-button
          :color="color"
          label="确定" />
      </color-cases>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2 class="my-md">Variants</h2>
      <variant-cases v-slot="{variant}">
        <ns-button v-for="(color) in brands" class="my-xs"
          :key="color"
          :color="color"
          :variant="variant" label="创建订单"></ns-button>
      </variant-cases>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2 class="my-md">形状</h2>
      <p>&nbsp;</p>
      <story file="button/shapes.vue" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2 class="my-md">图标</h2>
      <p>&nbsp;</p>
      <ns-row class="with-icon" align="center" justify="start">
        <ns-button
          variant="plain"
          icon="https://simple.shensi.tech/icons/pdf.svg"
          label="证件识别" />
        <ns-button
          color="primary"
          icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
          label="证件识别" />
        <ns-button
          color="primary"
          icon-fill="#000"
          icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
          label="证件识别" />
        <ns-button
          color="primary"
          icon-fill="#000"
          icon-position="end"
          icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
          label="证件识别" />
        <ns-button
          color="primary"
          icon-fill="#000"
          size="lg"
          round
          icon-position="end"
          icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
          label="证件识别" />
      </ns-row>
      <p>&nbsp;</p>
      <mobile-mockup url="http://localhost:10087" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'
import { MobileMockup } from '@/components'

</script>

<style lang="scss">
.button-page {
  .size-row {
    .ns-button {
      margin-inline-start: 40px;
    }
  }
  .variants {
    .ns-button {
      margin: 2px
    }
    .variant-label {
      width: 100px
    }
  }
}
</style>
