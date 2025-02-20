<template>
  <ns-row justify="start">
    <ns-switch-input v-model="state.open" name="open" label="敏感信息权限" />
  </ns-row>
  <ns-row justify="start">
    <ns-switch-input v-model="state.open" disabled name="open" label="敏感信息权限" />
  </ns-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  open: false,
})
</script>

