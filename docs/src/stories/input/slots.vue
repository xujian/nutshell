<template>
  <ns-input v-model="query" placeholder="请输入内容">
    <template #prepend>￥</template>
    <template #append>RMB</template>
  </ns-input>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const query = ref('')
</script>
