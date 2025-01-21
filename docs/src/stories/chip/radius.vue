<template>
  <ns-row justify="start">
    <ns-chip
      v-for="size in sizes"
      :key="size"
      :r="size"
      color="primary"
      :label="size" />
  </ns-row>
</template>

<script lang="ts" setup>
import { sizes } from '@uxda/nutshell'
</script>
