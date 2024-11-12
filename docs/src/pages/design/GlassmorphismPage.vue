<template>
  <ns-page class="glassmorphism-page">
    <ns-page-content>
      <h1 class="mt-lg">Glassmorphism</h1>
      <p class="caption">磨砂玻璃效果</p>
      <p>&nbsp;</p>
      <story file="design/play" />
    </ns-page-content>
  </ns-page>
</template>
<script lang="ts" setup>
</script>

<style lang="scss">
.glassmorphism-page {
  .story-card {
    > .card-body {
      background-image: url(https://simple.shensi.tech/images/wallpaper.jpg);
      background-size: cover;
      padding: var(--ns-spacing);
    }
  }
}
</style>
