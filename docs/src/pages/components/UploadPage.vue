<template>
  <ns-page class="button-page">
    <ns-page-content>
      <h1>文件上传</h1>
      <p class="caption">&lt;ns-upload&gt;</p>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p>&nbsp;</p>
      <story minimal file="upload/basic.vue" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>上传按钮与文件列表分离</h2>
      <p class="caption">有的场景需要上传按钮与文件列表分开, 可在别处用 &lt;ns-files&gt; 显示已上传文件</p>
      <p>&nbsp;</p>
      <story file="upload/detached.vue" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>单一模式</h2>
      <p>&nbsp;</p>
      <story file="upload/single.vue" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>上传时裁切</h2>
      <p>&nbsp;</p>
      <story file="upload/crop.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
</script>

<style lang="scss">
</style>
