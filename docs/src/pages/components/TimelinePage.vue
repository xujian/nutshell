<template>
  <ns-page class="timeline-page">
    <ns-page-content>
      <h1>各种时间线</h1>
      <p class="caption">&lt;ns-timeline&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>垂直展示的时间流信息。</note>
      <p>&nbsp;</p>
      <h2>基本特性</h2>
      <p>&nbsp;</p>
      <story file="timeline/basic.vue" />
      <p>&nbsp;</p>
      <h2>自定义 slot:content</h2>
      <p>&nbsp;</p>
      <story file="timeline/slot-content.vue" />
      <p>&nbsp;</p>
      <h2>自定义 slot:dot</h2>
      <p>&nbsp;</p>
      <story file="timeline/slot-dot.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
</script>

<style lang="scss">
</style>
