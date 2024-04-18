<script lang="ts" setup>
import { ref } from 'vue'

const options = [
  {
    value: 'ios',
    label: 'iOS'
  },
  {
    value: 'android',
    label: 'Android'
  },
  {
    value: 'pc',
    label: 'PC'
  },
]
</script>

<template>
  <ns-col :gap="10">
    <ns-button-group :options="options" />
    <ns-button-group
      color="primary"
      :options="options" />
    <ns-button-group
      round
      color="primary"
      :options="options" />
    <ns-button-group
      round
      variant="outlined"
      color="primary"
      :options="options" />
  </ns-col>
</template>
