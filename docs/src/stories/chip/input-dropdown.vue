<template>
  <ns-chips-input label="客户标签"
    name="tags"
    dropdown
    trigger="click"
    :options="chipsOptions"
    v-model="formData.tags" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formData = reactive({
  tags: [],
})

const chipsOptions = [
  { label: '有车', value: 'YC' },
  { label: '保单', value: 'BD' },
  { label: '有经营公司', value: 'YJYGS' },
  { label: '未加微信', value: 'WJWX' },
  { label: '公积金', value: 'GJJ' },
  { label: '黑名单', value: 'HMD' },
]
</script>
