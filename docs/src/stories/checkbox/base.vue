<template>
  <ns-checkbox
    name="check"
    label="我已阅读并同意用户条款"
    v-model="agreed" />

  <ns-checkbox
    name="check"
    disabled
    label="我已阅读并同意用户条款"
    v-model="agreed" />
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const agreed = ref(false)
</script>
