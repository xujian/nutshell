<template>
  <ns-radio-group v-model="搜索项" label="选项" name="param">
    <ns-radio value="1" label="客户姓名"></ns-radio>
    <ns-radio value="2" label="手机号码"></ns-radio>
    <ns-radio value="3" label="身份证号"></ns-radio>
    <ns-radio value="4" label="单位名称"></ns-radio>
  </ns-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const 搜索项 = ref('')
</script>
