<template>
  <ns-page class="chip-page">
    <ns-page-content>
      <h1 class="my-lg">头像</h1>
      <p class="caption">&lt;ns-avatar&gt;</p>
      <p>&nbsp;</p>
      <note>用来代表用户或事物，支持图片、图标或字符展示。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">src - 头像的地址，color - 头像的背景图</div>
      <story file="avatar/basic.vue" />
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{ size }">
        <ns-avatar :size src="https://cdn.ddjf.com/static/images/customer-center/tenant-icon.png" color="neutral" />
      </size-cases>
      <h2>可点击 Clickable</h2>
      <story file="avatar/clickable.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
