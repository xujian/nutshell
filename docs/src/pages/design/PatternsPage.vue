<template>
  <div class="page patterns-page">
    <h1 class="mt-lg">Built-in Patterns</h1>
    <p class="caption">预制图案填充</p>
    <p>&nbsp;</p>
    <ns-column align="stretch" :gap="10" class="playground full-width">
      <ns-card class="sample-card" fill="primary" :pattern>
        <ns-number
          prefix="2012年净利润"
          suffix="亿元人民币"
          width="48%"
          hight="400"
          justify="center"
          stroke="secondary"
          fill="#ffffff22"
          foreground="#fff"
          :animated="true"
          :value="8012.591" />
      </ns-card>
      <ns-row :gap="10" justify="start" wrap class="select full-width">
        <ns-button
          class="sample-button"
          fill="primary"
          v-for="(g) in patterns"
          :pattern="g.value"
          :key="g.value"
          @click="pattern = `${g.value}`"
          >{{ g.value }}</ns-button>
      </ns-row>
    </ns-column>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { UniDataItem } from '@uxda/nutshell'

const patterns = Array(10).fill('')
  .map((_, index) => `${index + 1}`)
  .map(x => x.padStart(3, '0'))
  .map(x => ({
    label: x,
    value: x
  }))
const pattern = ref<string>('001')
</script>

<style lang="scss">
.patterns-page {
  .playground {
    max-width: 652px;
    background-image: url('https://simple.shensi.tech/images/contour-02.svg');
    background-size: cover;
    background-color: #000;
    border-radius: 20px;
    padding: 10px;
  }
  .sample-card {
    width: 100%;
    height: 160px;
  }
  .select {
    max-width: 690px;
  }
  .sample-button {
    min-width: 80px;
    color: #fff;
    margin: 0;
  }
}
</style>
