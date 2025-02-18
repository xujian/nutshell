<template>
  <ns-form v-model="formData">
    <ns-search
      r="sm"
      v-model="formData.q" placeholder="搜索" />
  </ns-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  id: '',
  mobile: '',
  q: '',
})
</script>
