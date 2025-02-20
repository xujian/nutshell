<template>
  <ns-page class="rating-input-page">
    <ns-page-content>
      <h1>星星/星星输入框</h1>
      <p class="caption">&lt;ns-rating&gt;/&lt;ns-rating-input&gt;</p>
      <mobile-button url="pages/components/rating" />
      <p>&nbsp;</p>
      <note>对评级进行展示与操作</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">单独使用ns-rating，disabled可设置其禁用</div>
      <story file="rating/basic.vue" />
      <p>&nbsp;</p>
      <h2>星星输入框组件</h2>
      <div class="caption">ns-rating-input，disabled可设置其禁用</div>
      <story file="rating/input.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style lang="scss">

</style>
