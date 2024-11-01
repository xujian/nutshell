<script setup lang="ts">
import type { Size } from '@uxda/nutshell'
import { reactive, ref } from 'vue'

const state = reactive({
  hisense1: false,
  hisense2: false,
})

function onChange(checked: any, $event: any) {
  // console.log('onClick')
  // console.log(checked)
  // console.log($event)
  // console.log('onClick')
}

const disabled = ref(true)
function changeDisabled() {
  disabled.value = !disabled.value
}

const size = ref<Size>('sm')
function changeSize() {
  size.value = size.value === 'sm' ? 'xs' : 'sm'
}
</script>

<template>
  <h1 class="my-lg">开关&lt;ns-switch&gt;</h1>
  <h2 class="my-md">Switch</h2>
  <ns-form>
    <ns-row class="my-xs" style="align-items: center">
      普通：
      <ns-switch v-model="state.hisense1" @change="onChange" :size="size"></ns-switch>
      <ns-button color="primary" label="change size" @click="changeSize" class="mx-xs" />
    </ns-row>
    <ns-row class="my-xs" style="align-items: center">
      禁用：
      <ns-switch v-model="state.hisense2" :disabled="disabled" @change="onChange"></ns-switch>
      <ns-button color="primary" label="change disabled" @click="changeDisabled" class="mx-xs" />
    </ns-row>
  </ns-form>
</template>

<style scoped lang="scss">
.switch-page {
}
</style>
