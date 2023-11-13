<script setup lang="ts">
import { reactive, ref } from 'vue'

const state = reactive({
  hisense1: false,
  hisense2: false,
})

const disabled = ref(true)

function onChange(checked: any, $event: any) {
  // console.log('onClick')
  // console.log(checked)
  // console.log($event)
  // console.log('onClick')
}

function changeDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <h1 class="my-lg">开关&lt;ns-switch&gt;</h1>
  <h2 class="my-md">Switch</h2>
  <ns-form>
    <ns-row>
      普通：
      <ns-switch v-model="state.hisense1" @change="onChange"></ns-switch>
    </ns-row>
    <ns-row>
      禁用：
      <ns-switch v-model="state.hisense2" :disabled="disabled" @change="onChange"></ns-switch>
      <ns-button color="primary" label="change disabled" @click="changeDisabled" class="button-class" />
    </ns-row>
  </ns-form>
</template>

<style scoped lang="scss">
.switch-page {
}
</style>