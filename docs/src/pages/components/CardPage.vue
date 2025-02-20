<template>
  <ns-page class="card-page">
    <ns-page-content>
      <h1>卡片</h1>
      <p class="caption">&lt;ns-card&gt;</p>
      <mobile-button url="components/card/card" />
      <p>&nbsp;</p>
      <note>通用卡片容器, 可承载文字、列表、图片、段落</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p>&nbsp;</p>
      <story minimal file="card/anatomy" />
      <h2>橱窗</h2>
      <p>&nbsp;</p>
      <story minimal file="card/showcase" />
      <h2 class="my-md">Colors</h2>
      <ns-row class="colors" :gap="10">
        <ns-card v-for="color in brands"
          title="卡片"
          :fill="color"
          :key="color"></ns-card>
      </ns-row>
      <h2>变体 Variants</h2>
      <ns-row class="variants"
        align="center"
        :gap="10"
        justify="start">
        <ns-card class="my-xs"
          v-for="(variant) in variants"
          :key="variant"
          :title="variant"
          :color="'#999'"
          :variant="variant"></ns-card>
      </ns-row>
      <p>&nbsp;</p>
      <h2>渐变 Gradient</h2>
      <story minimal file="card/gradients" />
      <p>&nbsp;</p>
      <h2>视觉效果</h2>
      <designer v-slot="{props}">
        <ns-card v-bind="props" title="卡片">
          <lorem />
        </ns-card>
      </designer>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, sizes, variants } from '@uxda/nutshell'

const label = '提交'

</script>

<style lang="scss">
.card-page {
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
      min-width: 20%;
    }
  }
}
</style>
