<template>
  <ns-page class="stepper-page">
    <ns-page-content>
      <h1>步骤条</h1>
      <p class="caption">&lt;ns-stepper&gt;</p>
      <mobile-button url="pages/components/stepper" />
      <p>&nbsp;</p>
      <note>引导用户按照流程完成任务的导航条。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="stepper/basic.vue" />
      <p>&nbsp;</p>
      <h2>状态 Status</h2>
      <story file="stepper/status.vue" />
      <h2>标签位置 LabelPlacement</h2>
      <story file="stepper/placement.vue" />
      <h2>带描述</h2>
      <story file="stepper/description.vue" />
      <p>&nbsp;</p>
      <h2>箭头式 Arrow</h2>
      <p class="caption">variant="<span class="b">arrow</span>"</p>
      <story file="stepper/arrow.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const items = [
  {
    title: '线索'
  },
  {
    title: '意向'
  },
  {
    title: '签单'
  },
  {
    title: '做单'
  },
  {
    title: '放款'
  },
  {
    title: '结单'
  }
]
</script>

<style lang="scss">
</style>
