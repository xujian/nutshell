<template>
  <ns-form v-model="formData">
    <ns-id-input name="id"
        label="证件号码"
        v-model="formData.id" />
    <ns-mobile-input name="mobile"
      label="手机号"
      v-model="formData.mobile" />
  </ns-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  id: '',
  mobile: '18676768200',
})
</script>
