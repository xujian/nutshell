<template>
  <ns-radio-group
    v-model="搜索项"
    :options
    label="选项"
    name="搜索项"
    disabled
    direction="column" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const 搜索项 = ref(''),
  options = [
    { label: '客户姓名', value: '1' },
    { label: '手机号码', value: '2' },
    { label: '单位名称', value: '3', disabled: true },
  ]
</script>
