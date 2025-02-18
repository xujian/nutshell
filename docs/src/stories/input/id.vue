<template>
  <ns-form v-model="formData">
    <ns-id-input name="id"
      label="证件号码"
      placeholder="请输入证件号码"
      v-model="formData.id" />
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
