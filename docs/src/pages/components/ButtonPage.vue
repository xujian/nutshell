<template>
  <h1 class="my-lg">按钮</h1>
  <story file="button/basic.vue" />
  <!--panel file="forms/tasks.vue" /-->
  <!--board file="contracts/query.vue" /-->
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Size</h2>
  <ns-row justify="start">
    <ns-button color="primary" v-for="size in sizes" :key="size" :label="size" :size="size"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Color</h2>
  <ns-row justify="start">
    <ns-button v-for="color in colors" :color="color" :label="color" :key="color"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" justify="start" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-button v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color"
      :variant="variant" label="创建订单"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2 class="my-md">形状</h2>
  <p>&nbsp;</p>
  <story file="button/shapes.vue" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <ns-row class="with-icon" align="center" justify="start">
    <ns-button class="my-xs"
      color="primary"
      icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
      label="证件识别"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <mobile-mockup url="http://localhost:10087" />
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'
import { MobileMockup } from '@/components'

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
