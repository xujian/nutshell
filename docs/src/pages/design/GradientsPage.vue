<template>
  <div class="page gradients-page">
    <h1 class="mt-lg">Built-in Gradients</h1>
    <p class="caption">内置渐层</p>
    <p>&nbsp;</p>
    <ns-column align="stretch" :gap="10" class="playground full-width">
      <ns-card class="sample-card" :gradient>
      </ns-card>
      <ns-row :gap="10" wrap class="select full-width">
        <ns-button
          v-for="(g) in gradients"
          :gradient="g.value"
          :key="g.value"
          class="gradient-sample number"
          @click="gradient = `${g.value}`"
          >{{ g.value }}</ns-button>
      </ns-row>
    </ns-column>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { UniDataItem } from '@uxda/nutshell'

const gradients = ref<UniDataItem[]>([])

onMounted(() => {
  gradients.value = Array(180).fill('')
    .map((_, index) => `${index + 1}`)
    .map(x => x.padStart(3, '0'))
    .map(x => ({
      label: `gradient-${x}`,
      value: x
    }))
})

const gradient = ref<string>('001')
</script>

<style lang="scss">
.gradients-page {
  .playground {
    background-image: url('https://simple.shensi.tech/images/contour-02.svg');
    background-size: cover;
    background-color: #000;
    border-radius: 20px;
    padding: 10px;
  }
  .sample-card {
    width: 400px;
    height: 160px;
    transition: background 1s;
  }
  .select {
    max-width: 690px;
  }
  .gradient-sample {
    width: 60px;
    margin: 0;
  }
}
</style>
