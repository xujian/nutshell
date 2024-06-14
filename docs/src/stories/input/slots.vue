<template>
  <ns-input v-model="query">
    <template #prepend>
      <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
    </template>
  </ns-input>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const query = ref('')
</script>
