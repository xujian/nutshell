<template>
  <div class="page pallettes-page">
    <h1 class="my-lg">标准色表</h1>
    <ns-row class="color-row" v-for="c in brands" :key="c.name"
      justify="start"
      align="start"
      :gap="16">
      <ns-flex-item class="m-sm">
        <color-card :color="c"></color-card>
      </ns-flex-item>
      <ns-flex-item class="shades py-sm">
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
      </ns-flex-item>
    </ns-row>
  </div>
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
.pallettes-page {
  height: fit-content;
  .color-row {
    width: fit-content;
  }
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
}
</style>
