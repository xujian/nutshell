<template>
  <h1 class="my-lg">按钮</h1>
  <h2 class="my-md">Size</h2>
  <ns-row>
    <ns-button color="primary" v-for="size in sizes" :key="size" :label="size" :size="size"></ns-button>
  </ns-row>
  <h2 class="my-md">Color</h2>
  <ns-row>
    <ns-button v-for="color in colors" :color="color" :label="color" :key="color"></ns-button>
  </ns-row>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-button v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color" 
      :variant="variant" label="创建订单"></ns-button>
  </ns-row>
  <ns-row class="with-icon" align="center">
    <ns-button class="my-xs"
      color="primary"
      icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png" 
      label="证件识别"></ns-button>
  </ns-row>
  <p>&nbsp;</p>
  <code-view :code="code" />
  <code-editor :code="code" />
</template>

<script lang="ts" setup>
import { CodeEditor, CodeView } from '../../components/code'
import { colors, sizes, variants } from '../../props'

const label = '提交'

const code = `
<template>
  <div></div>
</template>
`

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