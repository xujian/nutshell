<template>
  <ns-page class="number-page">
    <ns-page-content>
      <h1>数字</h1>
      <p class="caption">&lt;ns-number&gt;</p>
      <mobile-button url="pages/components/number" />
      <p>&nbsp;</p>
      <note>特殊数字展示卡片</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">前缀-prefix, 后缀-suffix</div>
      <story file="number/basic.vue" />
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{size}">
        <ns-number
          suffix="亿元"
          justify="center"
          :size
          :value="number" />
      </size-cases>
      <p>&nbsp;</p>
      <h2>对齐方式</h2>
      <div class="caption">水平对齐-justify, 水平对齐-align</div>
      <story file="number/justify.vue" />
      <p>&nbsp;</p>
      <h2>头部与箭头</h2>
      <div class="caption">头部内容-header, 箭头-trend/auth-trend, 底部内容-footer</div>
      <story file="number/arrow.vue" />
      <p>&nbsp;</p>
      <h2>高级用法</h2>
      <div class="caption">是否动画-animated, 渐变背景-gradient</div>
      <story file="number/full.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const number = 1024.00
</script>

<style lang="scss">
</style>
