<template>
  <ns-row justify="start">
    <ns-switch v-model="state.open" />
  </ns-row>
  <ns-row justify="start" style="margin-top: 15px;">
    <ns-switch v-model="state.open" disabled />
  </ns-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  open: false,
})
</script>

