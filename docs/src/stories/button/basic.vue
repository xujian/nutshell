<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('确定')
</script>

<template>
  <ns-button variant="outlined" color="primary" :label="text" />
</template>
