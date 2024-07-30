<template>
  <div class="page patterns-page">
    <h1 class="mt-lg">Built-in Gradients</h1>
    <p class="caption">内置渐层</p>
    <p>&nbsp;</p>
    <ns-column align="stretch" :gap="10" class="playground full-width">
      <ns-card class="sample-card" :pattern>
      </ns-card>
      <ns-row :gap="10" wrap class="select full-width">
        <ns-button
          v-for="(g) in patterns"
          :gradient="g.value"
          :key="g.value"
          class="gradient-sample number"
          @click="pattern = `${g.value}`"
          >{{ g.value }}</ns-button>
      </ns-row>
    </ns-column>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { UniDataItem } from '@uxda/nutshell'

const patterns = ref<UniDataItem[]>([])
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
    transition: background 1s;
  }
  .select {
    max-width: 690px;
  }
  .patternspatterns-sample {
    min-width: 60px;
    margin: 0;
  }
}
</style>
