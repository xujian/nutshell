<template>
  <ns-page class="files-page">
    <ns-page-content>
      <h1>文件表</h1>
      <p class="caption">&lt;ns-files&gt;</p>
      <mobile-button url="pages/components/files" />
      <p>&nbsp;</p>
      <note>文件的上传与展示</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="files/basic.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
</script>

<style lang="scss">
</style>
