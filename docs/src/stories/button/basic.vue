<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('Click me')
</script>

<template>
  <ns-button :label="text" />
</template>
