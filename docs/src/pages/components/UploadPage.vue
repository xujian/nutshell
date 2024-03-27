<template>
  <h1 class="my-lg">文件上传 &lt;ns-upload&gt;</h1>
  <p>&nbsp;</p>
  <h3>基本用法</h3>
  <p>&nbsp;</p>
  <story file="upload/basic.vue" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>上传按钮与列表分离</h3>
  <p class="caption">当使用场景不允许时, 可在别处用 &lt;ns-files&gt; 显示已上传文件</p>
  <p>&nbsp;</p>
  <story file="upload/detached.vue" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3>单一模式</h3>
  <p>&nbsp;</p>
  <story file="upload/single.vue" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
</script>

<style lang="scss">
</style>
