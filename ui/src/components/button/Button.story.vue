<script setup>
import { ref } from 'vue'

const text = ref('Click me')
</script>

<template>
  <Story>
    <ns-button :label="text">
    </ns-button>
    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>
