<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()

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
    value: 'windows',
    label: 'Windows'
  },
  {
    value: 'ubuntu',
    label: 'Ubuntu'
  },
]
</script>

<template>
  <ns-col :gap="10">
    <ns-button-group v-model="value" :options="options" />
    <ns-button-group
      v-model="value"
      color="primary"
      :options="options" />
    <ns-button-group
      v-model="value"
      round
      color="primary"
      :options="options" />
    <ns-button-group
      v-model="value"
      round
      variant="outlined"
      color="primary"
      :options="options" />
  </ns-col>
</template>
