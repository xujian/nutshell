<template>
  <ns-button-group-input
    v-model="搜索项"
    :options
    size="sm"
    label="增加搜索项"
    name="搜索项" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const 搜索项 = ref(''),
  options = [
    { label: '客户姓名', value: '1' },
    { label: '手机号码', value: '2' },
    { label: '身份证号', value: '3' },
    { label: '单位名称', value: '4', disabled: true },
  ]
</script>
