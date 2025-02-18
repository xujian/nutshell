<template>
  <ns-form v-model="formData">
    <ns-mobile-input name="mobile"
      label="手机号"
      placeholder="请输入手机号"
      v-model="formData.mobile" />
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
