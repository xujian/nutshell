<template>
  <ns-page class="empty-page">
    <ns-page-content>
      <h1>空状态</h1>
      <p class="caption">&lt;ns-empty&gt;</p>
      <p>&nbsp;</p>
      <note>空状态时的展示占位图。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">description - 空状态的描述；image - 空状态的占位图</div>
      <story file="empty/basic" />
      <p>&nbsp;</p>
      <h2>内置模式 Mode</h2>
      <div class="caption">内置7种模式：data, search, notice, network, loading, permission, 404</div>
      <story file="empty/mode" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.empty-page {

}
</style>
