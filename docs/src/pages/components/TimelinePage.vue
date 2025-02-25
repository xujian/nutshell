<template>
  <ns-page class="timeline-page">
    <ns-page-content>
      <h1>各种时间线</h1>
      <p class="caption">&lt;ns-timeline&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>垂直展示的时间流信息。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">items - 时间线内容列表，格式为[{title: string, time?: string, caption?: string, status?: string}]</div>
      <story file="timeline/basic.vue" />
      <p>&nbsp;</p>
      <h2>自定义 slot:content</h2>
      <div class="caption">slot=content - 自定义status不是off状态时content的展示内容</div>
      <story file="timeline/slot-content.vue" />
      <p>&nbsp;</p>
      <h2>自定义 slot:dot</h2>
      <div class="caption">slot=dot - 自定义所有状态时的dot展示内容</div>
      <story file="timeline/slot-dot.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
