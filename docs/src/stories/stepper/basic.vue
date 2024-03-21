<template>
  <ns-stepper class="basic-stepper"
    status="wait"
    :items="items" />
</template>
<script lang='ts' setup>
const items = [
  {
    title: '线索'
  },
  {
    title: '意向'
  },
  {
    title: '上门'
  },
  {
    title: '签单'
  },
  {
    title: '做单'
  },
  {
    title: '放款'
  },
  {
    title: '结单'
  }
]
</script>
