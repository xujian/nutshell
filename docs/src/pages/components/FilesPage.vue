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
      <div class="caption">items - 文件列表，格式为[{id: string, name: string, type: string, url: string, thumb?: string}]</div>
      <div class="caption" style="margin-top: -10px; margin-bottom: 15px;">downloadable - 文件是否可下载；deletable - 文件是否可删除</div>
      <story file="files/basic.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
