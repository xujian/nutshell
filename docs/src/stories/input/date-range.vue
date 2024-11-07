<template>
  <ns-form v-model="formData">
    <ns-date-range-input
      name="借贷期间"
      label="借贷期间"
      hint="取值格式是数组"
      v-model="formData.借贷期间"
      @change="onRangeDateInputChange"
      :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  借贷期间: void 0,
})

const onRangeDateInputChange = (value?: string[]) => {
  console.log('===onRangeDateInputChange value', value)
}
</script>
