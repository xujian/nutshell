<template>
  <div class="ns-row">
    <p>&nbsp;</p>
    <p>{{ message }}</p>
    <p>&nbsp;</p>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  message: String
})
</script>
