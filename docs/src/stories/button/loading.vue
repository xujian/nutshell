<template>
  <ns-button color="primary"
    :loading :label @click="onClick" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const label = ref('保存')
const loading = ref(false)

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000);
}
</script>
