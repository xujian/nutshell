<template>
  <ns-page class="toast-page">
    <ns-page-content>
      <h1>消息</h1>
      <p class="caption">&lt;ns-toast&gt;</p>
      <mobile-button url="pages/interactive/toast" />
      <p>&nbsp;</p>
      <note>全局展示操作反馈信息</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p class="caption">toast(string, options), 第一个参数即为提示的内容，options.duration为消息延迟关闭时间</p>
      <story file="toast/basic.vue" />
      <p>&nbsp;</p>
      <h2>消息类型</h2>
      <p class="caption">options.type</p>
      <story file="toast/type.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

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
