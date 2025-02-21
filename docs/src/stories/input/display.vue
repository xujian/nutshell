<template>
  <ns-form v-model="formData">
    <ns-display label="订单">
      自定义展示内容
    </ns-display>
    <ns-display label="金额">
      <ns-number :value="1024"
        size="xs"
        :minimumFractionDigits="2"
        hasDaxie />
    </ns-display>
  </ns-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  id: '',
  mobile: '',
  q: '',
})
</script>
