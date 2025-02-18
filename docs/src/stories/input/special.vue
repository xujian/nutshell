<template>
  <ns-form v-model="formData">
    <ns-row align="start" justify="start">
      <ns-id-input name="id"
        label="证件号码"
        placeholder="请输入证件号码"
        v-model="formData.id" />
      <ns-mobile-input name="mobile"
        label="手机号"
        placeholder="请输入手机号"
        v-model="formData.mobile" />
      <ns-search
        r="sm"
        v-model="formData.q" placeholder="搜索" />
    </ns-row>
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
