<template>
  <ns-stepper
    labelPlacement="vertical"
    :modelValue="2"
    :items="items" />
</template>
<script lang='ts' setup>
const items = [
  {
    title: '申请信息'
  },
  {
    title: '客户信息'
  },
  {
    title: '房产信息'
  },
  {
    title: '贷款信息'
  },
  {
    title: '影像信息'
  },
]
</script>
