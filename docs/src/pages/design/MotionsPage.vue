<template>
  <div class="page motions-page">
    <h1 class="mt-lg">Built-in Motions</h1>
    <p class="caption">预制缓动背景</p>
    <p>&nbsp;</p>
    <ns-column align="stretch" :gap="10" class="playground full-width">
      <ns-card :class="['sample-card', `motion-${motion}`]">
      </ns-card>
      <ns-row :gap="10" justify="start" wrap class="select full-width">
        <ns-button
          v-for="(g) in motions"
          gradient="008"
          :key="g.value"
          class="motion-sample number"
          @click="motion = `${g.value}`"
          >{{ g.value }}</ns-button>
      </ns-row>
    </ns-column>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { UniDataItem } from '@uxda/nutshell'

const motions = [
    '001', '002', '003', '004', '005',
    '006', '007',
  ].map(x => ({
    label: `motion-${x}`,
    value: x
  })),
  motion = ref('001')

</script>

<style lang="scss">
.motions-page {
  .playground {
    max-width: 710px;
    background-image: url('https://simple.shensi.tech/images/contour-01.svg');
    background-size: cover;
    background-color: #000;
    border-radius: 20px;
    padding: 10px;
  }
  .sample-card {
    width: 100%;
    height: 160px;
    transition: background 1s;
  }
  .select {
    max-width: 690px;
  }
  .motion-sample {
    min-width: 120px;
    margin: 0;
  }
}
</style>
