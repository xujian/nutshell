<template>
  <ns-scrollable :height="240" @bottom-reached="onBottomReached">
    <ns-column :gap="10">
      <p><lorem /></p>
      <p><lorem /></p>
      <p><lorem /></p>
      <p><lorem /></p>
      <p><lorem /></p>
      <p><lorem /></p>
      <p><lorem /></p>
    </ns-column>
  </ns-scrollable>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const onBottomReached = () => {
  console.log('bottom reached')
}
</script>
