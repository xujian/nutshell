<template>
  <ns-form v-model="form" >
    <ns-input v-model="form.num" name="num" placeholder="请输入内容" :rules="[checkNumber]">
      <template #prepend>￥</template>
      <template #append>RMB</template>
    </ns-input>
  </ns-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  num: '',
})
const checkNumber = (value: string) => {
  return !!Number(value)
}
</script>
