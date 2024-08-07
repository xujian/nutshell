<template>
  <div class="page glassmorphism-page">
    <h1 class="mt-lg">Glassmorphism</h1>
    <p class="caption">磨砂玻璃效果</p>
    <story file="design/play" />
  </div>
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
