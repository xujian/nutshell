<template>
  <ns-form v-model="formData">
    <ns-month-input
      name="registerMonth"
      label="选择月份"
      v-model="formData.月份"
      variant="plain"
      :rules="['required']" />
    <ns-year-input name="registerYear"
      label="选择年份"
      v-model="formData.年份"
      variant="plain"
      :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  月份: void 0,
  年份: void 0
})
</script>
