<script setup lang="ts">
import { ref } from 'vue'
import HomeHero from '@/components/HomeHero.vue'
import LatestReleases from '@/components/LatestReleases.vue'
// import { test } from 'virtual:test'

// console.log('vite-plugin-test-----///---///---///---///', test)

const variants: string[] = ['solid', 'outlined', 'soft', 'plain'],
  colors = [
  'primary',
  'secondary',
  'neutral',
  'accent',
  'positive',
  'negtive',
  'warning',
]

const current = ref<number>(0)
const items = ref<any>([
  {
    title: 'Finished'
  },
  {
    title: 'In Progress'
  },
  {
    title: 'Waiting'
  },
])
</script>

<template>
  <home-hero />
  <div class="features">
    <p>&nbsp;</p>
    <h2>最新进展</h2>
    <p>&nbsp;</p>
    <latest-releases />
    <p>&nbsp;</p>
    <ns-button label="创建" v-tooltip="'点击查看详情点击查看详情'"></ns-button>
  </div>
  <p>&nbsp;</p>
  <ns-card title="待办任务" class="no-padding">
    <template #header>
      <ns-chip label="政策"></ns-chip>
    </template>
    <template #corner>
      <ns-chip label="政策1"></ns-chip>
    </template>
  </ns-card>
  <p>&nbsp;</p>
  <div class="buttons">
    <ns-row v-for="(variant) in variants" :key="variant">
      <ns-button v-for="(color) in colors"
        :key="color"
        :color="color"
        :variant="variant" label="创建订单"></ns-button>
    </ns-row>
  </div>
  <div class="steps">
    <ns-stepper v-model="current" :items="items">
      <template #progressDot="{ index, status, prefixCls }">
        <a-popover>
          <template #content>
            <span>step {{ index }} status: {{ status }}</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`"></span>
        </a-popover>
      </template>
    </ns-stepper>
  </div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</template>
<style lang="scss">
.buttons {
  .ns-button {
    margin: 6px;
  }
}
</style>
