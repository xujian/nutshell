<template>
  <ns-page class="stepper-page" fill="neutral">
    <ns-page-header title="步骤条"
      caption="<ns-stepper>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-row justify="center">
        <ns-stepper
          v-model="step"
          :items />
      </ns-row>
      <p>&nbsp;</p>
      <ns-row justify="center">
        <ns-button
          size="xs"
          color="primary"
          :disabled="step === 1"
          @click="prev">上一步</ns-button>
        <ns-button
          size="xs"
          color="primary"
          :disabled="step === items.length"
          @click="next">下一步</ns-button>
      </ns-row>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const step = ref(2),
  next = () => {
    step.value = step.value >= 7
      ? 7
      : step.value + 1
  },
  prev = () => {
    step.value = step.value <= 1
      ? 1
      : step.value - 1
  }
const items = [
  {
    title: '线索'
  },
  {
    title: '意向'
  },
  {
    title: '上门'
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

