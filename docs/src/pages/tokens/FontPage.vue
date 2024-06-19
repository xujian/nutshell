<template>
  <h1 class="my-lg">字型 font</h1>

  <h2 class="my-md">标题</h2>
  <ns-row justify="start"><label class="heading-label">h1</label><h1>标题</h1></ns-row>
  <ns-row justify="start"><label class="heading-label">h2</label><h2>标题</h2></ns-row>
  <ns-row justify="start"><label class="heading-label">h3</label><h3>标题</h3></ns-row>
  <ns-row justify="start"><label class="heading-label">h4</label><h4>标题</h4></ns-row>
  <ns-row justify="start"><label class="heading-label">h5</label><h5>标题</h5></ns-row>
  <ns-row justify="start"><label class="heading-label">h6</label><h6>标题</h6></ns-row>
  <h2 class="my-md">Size</h2>

  <ns-row  v-for="size in sizes" :key="size" justify="start">
    <label class="heading-label">{{ size }}</label>
    <div><span :class="`font-${size}`">待办任务</span></div>
  </ns-row>
  <h2 class="my-md">Colors</h2>
  <ns-row class="colors" v-for="color in colors" align="start" :key="color" >
    <ns-flex-item class="label" span="12">
      <h4>{{ color }}</h4>
    </ns-flex-item>
    <ns-flex-item span="12">
      <h1 :class="`text-${color}`" >待办任务</h1>
    </ns-flex-item>
  </ns-row>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="start" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <div v-for="(color) in colors" class="my-xs"
      :key="color"
      :color="color"
      :variant="variant" label="创建订单"></div>
  </ns-row>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '../../props'

const label = '提交'

</script>

<style lang="scss">
.heading-label {
  width: 120px;
}
.colors {
  .label {
    width: 120px;
    text-align: left;
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
</style>
