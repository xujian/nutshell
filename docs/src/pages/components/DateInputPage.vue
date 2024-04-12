<template>
  <h1 class="my-lg">日期输入框 &lt;ns-date-input&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-date-input name="registerDate" label="选择日期"
      v-model="registerDate"
      :variant="variant"
      :rules="['required']" />
  </ns-row>

  <h2 class="my-lg">日期区间输入框 &lt;ns-date-range-input&gt;</h2>
  <ns-date-range-input name="rangedDate" label="选择起止日期"
    hint="日期是这个"
    :width="300"
    v-model="rangedDate"
    @change="onRangeDateInputChange"
    :rules="['required']">
  </ns-date-range-input>

  <h1 class="my-lg">月份输入框 &lt;ns-month-input&gt;</h1>
  <ns-month-input name="registerMonth" label="选择月份"
      v-model="registerMonth"
      variant="plain"
      :rules="['required']" />

  <h1 class="my-lg">年份输入框 &lt;ns-year-input&gt;</h1>
  <ns-year-input name="registerYear" label="选择月份"
      v-model="registerYear"
      variant="plain"
      :rules="['required']" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { variants } from '../../props'

const registerDate = ref<string>('2023-09-01')
const registerMonth = ref<string>('')
const registerYear = ref<string>('')
const rangedDate = ref<string[]>()

const onRangeDateInputChange = (value?: string[]) => {
  // rangedDate.value = value
  console.log('===onRangeDateInputChange value', value)
}
</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
