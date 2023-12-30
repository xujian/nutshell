<template>
  <pre>
    {{ veturData }}
  </pre>
</template>

<script lang="ts" setup>
import { properties } from '@uxda/nutshell'
const veturData = JSON.stringify(properties, null, 2)
</script>
