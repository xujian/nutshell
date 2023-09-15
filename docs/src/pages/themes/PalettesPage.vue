<template>
  <h1 class="my-lg">标准色表</h1>
  <ns-row v-for="c in brands" :key="c.name" justify="start" align="start" :gutter="16">
    <ns-col class="m-sm">
      <color-card :color="c"></color-card>
    </ns-col>
    <ns-col class="shades py-md">
      <ns-row class="alphas-row r-sm mb-xs">
        <div class="color"
          v-for="n of shades" :key="n"
          v-tooltip="`${c.name}-${n}`"
          :style="{backgroundColor: `var(--ns-${c.name}-${n})`}"></div>
      </ns-row>
      <ns-row class="tints-row r-sm mb-xs">
        <div class="color"
          v-for="n of shades" :key="n"
          v-tooltip="`${c.name}--${n}`"
          :style="{backgroundColor: `var(--ns-${c.name}--${n})`}"></div>
      </ns-row>
      <ns-row class="shades-row r-sm mb-xs">
        <div class="color"
          v-for="n of shades" :key="n"
          v-tooltip="`${c.name}---${n}`"
          :style="{backgroundColor: `var(--ns-${c.name}---${n})`}"></div>
      </ns-row>
    </ns-col>
  </ns-row>
</template>
<script lang="ts" setup>
import ColorCard from '@/components/ColorCard.vue'

const shades = [
  10, 20, 30, 40, 50, 60, 70, 80, 90
]

const brands = [
  {
    name: 'primary',
    label: '主色'
  },
  {
    name: 'secondary',
    label: '辅色'
  },
  {
    name: 'neutral',
    label: '中立色'
  },
  {
    name: 'accent',
    label: '着重色'
  },
  {
    name: 'positive',
    label: '正向色'
  },
  {
    name: 'negtive',
    label: '负面色'
  },
  {
    name: 'warning',
    label: '警示色'
  }
]

</script>

<style lang="scss">
.shades {
  .tints-row, .shades-row, .alphas-row {
    border-style: solid;
    border-width: 1px;
    border-color: var(--ns-primary---50);
    .color {
      width: 32px;
      height: 32px;
    }
    overflow: hidden;
  }
}
</style>